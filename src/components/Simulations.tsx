/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  HelpCircle, 
  Layers, 
  Lightbulb, 
  Compass, 
  Activity, 
  TrendingUp, 
  Battery, 
  Gauge,
  Zap,
  Sparkles,
  Timer,
  Flame,
  AlertTriangle,
  Info
} from 'lucide-react';

interface TrajectoryPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  t: number;
}

export const Simulations: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'projectile' | 'refraction' | 'circuit' | 'pendulum' | 'gravity_orbit'>('projectile');

  // --- 1. PROJECTILE MOTION STATES, AIR RESISTANCE & PHYSICS ---
  const [projVelocity, setProjVelocity] = useState(38);
  const [projAngle, setProjAngle] = useState(45);
  const [projGravity, setProjGravity] = useState(9.8);
  const [projMass, setProjMass] = useState(5);
  const [projDrag, setProjDrag] = useState(0.1); // Air resistance coefficient (0 = vacuum)
  const [projIsRunning, setProjIsRunning] = useState(false);
  const [projTime, setProjTime] = useState(0);
  const projIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-calculate trajectory path using Euler integration to support air resistance
  const trajData = useMemo(() => {
    const angleRad = (projAngle * Math.PI) / 180;
    let x = 0;
    let y = 0;
    let vx = projVelocity * Math.cos(angleRad);
    let vy = projVelocity * Math.sin(angleRad);
    const path: TrajectoryPoint[] = [{ x, y, vx, vy, t: 0 }];
    let t = 0;
    const dt = 0.02; // Fine step size for physics stability
    let maxHeight = 0;

    while (y >= 0 && t < 20) {
      const speed = Math.sqrt(vx * vx + vy * vy);
      // Drag resistance formula: acceleration_drag = - (0.012 * drag * speed * vx) / mass
      const dragFactor = (0.015 * projDrag * speed) / projMass;
      const ax = - vx * dragFactor;
      const ay = - projGravity - vy * dragFactor;

      vx += ax * dt;
      vy += ay * dt;
      x += vx * dt;
      y += vy * dt;
      t += dt;

      if (y > maxHeight) {
        maxHeight = y;
      }
      if (y >= 0) {
        path.push({ x, y, vx, vy, t });
      }
    }
    return {
      path,
      xMax: x,
      hMax: maxHeight,
      tFlight: t
    };
  }, [projVelocity, projAngle, projGravity, projDrag, projMass]);

  // Real-time animation physics variables mapping
  const currentPoint = trajData.path.find(p => p.t >= projTime) || trajData.path[trajData.path.length - 1] || { x: 0, y: 0, vx: 0, vy: 0 };
  const currentX = currentPoint.x;
  const currentY = currentPoint.y;
  const currentVy = currentPoint.vy;
  const currentVx = currentPoint.vx;

  useEffect(() => {
    if (projIsRunning) {
      projIntervalRef.current = setInterval(() => {
        setProjTime((prevTime) => {
          const nextTime = prevTime + 0.035;
          if (nextTime >= trajData.tFlight) {
            setProjIsRunning(false);
            if (projIntervalRef.current) clearInterval(projIntervalRef.current);
            return trajData.tFlight;
          }
          return nextTime;
        });
      }, 30);
    } else {
      if (projIntervalRef.current) clearInterval(projIntervalRef.current);
    }
    return () => {
      if (projIntervalRef.current) clearInterval(projIntervalRef.current);
    };
  }, [projIsRunning, trajData]);

  const handleProjLaunch = () => {
    setProjTime(0);
    setProjIsRunning(true);
  };

  const handleProjReset = () => {
    setProjIsRunning(false);
    setProjTime(0);
  };


  // --- 2. OPTICAL REFRACTION STATES & COLOR DISPERSION ---
  const [refAngle, setRefAngle] = useState(48); // Angle in degrees
  const [n1Base, setN1Base] = useState(1.50); // Medium 1 Base Index
  const [n2Base, setN2Base] = useState(1.00); // Medium 2 Base Index
  const [laserColor, setLaserColor] = useState<'red' | 'green' | 'violet'>('red');

  // Dispersion calculations (dispersion constant: violet has slightly larger refraction)
  const refractiveOffset = laserColor === 'red' ? -0.02 : laserColor === 'violet' ? 0.03 : 0.0;
  const n1 = Math.max(1.0, n1Base + refractiveOffset);
  const n2 = Math.max(1.0, n2Base + (refractiveOffset * 0.5)); // air dispersion is smaller

  const refAngleRad = (refAngle * Math.PI) / 180;
  const sinRefract = (n1 * Math.sin(refAngleRad)) / n2;
  const isTotalReflection = sinRefract > 1.0;
  const refractAngleRad = isTotalReflection ? refAngleRad : Math.asin(sinRefract);
  const refractAngle = (refractAngleRad * 180) / Math.PI;

  const criticalAngle = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : null;

  const getLaserHexColor = () => {
    if (laserColor === 'red') return '#ef4444';
    if (laserColor === 'green') return '#22c55e';
    return '#a855f7'; // violet
  };


  // --- 3. OHM'S LAW WITH SAFETY FUSE BREAKER ---
  const [circuitVoltage, setCircuitVoltage] = useState(12);
  const [circuitResistance, setCircuitResistance] = useState(5);
  const [circuitSwitchOn, setCircuitSwitchOn] = useState(true);
  const [electronOffset, setElectronOffset] = useState(0);
  const [sigortaAtik, setSigortaAtik] = useState(false);
  const [fuseLimit, setFuseLimit] = useState(7.0); // Active fuse limit in amperes

  const circuitCurrent = (circuitSwitchOn && !sigortaAtik) ? (circuitVoltage / circuitResistance) : 0;
  const powerW = circuitCurrent * circuitVoltage;

  // Short circuit fuse tripper
  useEffect(() => {
    if (circuitSwitchOn && !sigortaAtik && circuitCurrent > fuseLimit) {
      const timer = setTimeout(() => {
        setSigortaAtik(true);
        setCircuitSwitchOn(false);
      }, 900); // safety breaker latency
      return () => clearTimeout(timer);
    }
  }, [circuitSwitchOn, circuitCurrent, sigortaAtik, fuseLimit]);

  useEffect(() => {
    let animFrame: number;
    const animateElectrons = () => {
      if (circuitSwitchOn && circuitCurrent > 0) {
        setElectronOffset((prev) => (prev + circuitCurrent * 1.8) % 100);
      }
      animFrame = requestAnimationFrame(animateElectrons);
    };
    animFrame = requestAnimationFrame(animateElectrons);
    return () => cancelAnimationFrame(animFrame);
  }, [circuitSwitchOn, circuitCurrent]);


  // --- 4. BASİT Sarkaç (SIMPLE PENDULUM OSCILLATOR) ---
  const [pendLength, setPendLength] = useState(2.2); // meter (1.0 - 4.0)
  const [pendMass, setPendMass] = useState(5.0); // kg
  const [pendGravity, setPendGravity] = useState(9.8); // m/s^2
  const [pendAngle0, setPendAngle0] = useState(45); // initial angle (degrees)
  const [pendDamping, setPendDamping] = useState(0.015); // friction/air damping
  const [pendIsRunning, setPendIsRunning] = useState(false);
  const [pendTime, setPendTime] = useState(0);
  const pendIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Large-angle period correction formula: T = T_0 * (1 + 1/4 * sin^2(theta_0/2))
  const theta0Rad = (pendAngle0 * Math.PI) / 180;
  const pendulumPeriod = useMemo(() => {
    const tBase = 2 * Math.PI * Math.sqrt(pendLength / pendGravity);
    const correction = 1 + 0.25 * Math.pow(Math.sin(theta0Rad / 2), 2);
    return tBase * correction;
  }, [pendLength, pendGravity, pendAngle0]);

  const omegaPend = (2 * Math.PI) / pendulumPeriod;

  // Instantaneous angle calculation with exponential decay (friction)
  const currentPendAngleRad = useMemo(() => {
    if (!pendIsRunning && pendTime === 0) return theta0Rad;
    return theta0Rad * Math.cos(omegaPend * pendTime) * Math.exp(-pendDamping * pendTime);
  }, [pendTime, omegaPend, theta0Rad, pendDamping, pendIsRunning]);

  const currentPendAngleDeg = (currentPendAngleRad * 180) / Math.PI;

  useEffect(() => {
    if (pendIsRunning) {
      pendIntervalRef.current = setInterval(() => {
        setPendTime((prev) => prev + 0.03);
      }, 30);
    } else {
      if (pendIntervalRef.current) clearInterval(pendIntervalRef.current);
    }
    return () => {
      if (pendIntervalRef.current) clearInterval(pendIntervalRef.current);
    };
  }, [pendIsRunning]);

  // Energy computations (PE = m * g * h, KE = Total - PE)
  const ampDampingFactor = Math.exp(-pendDamping * pendTime);
  const maxAvailableH = pendLength * (1 - Math.cos(theta0Rad)) * (ampDampingFactor * ampDampingFactor);
  const currentH = pendLength * (1 - Math.cos(currentPendAngleRad));
  const pePend = pendMass * pendGravity * currentH;
  const totalEPend = pendMass * pendGravity * maxAvailableH;
  const kePend = Math.max(0, totalEPend - pePend);

  const tPendulum = pendulumPeriod;
  const pivotX = 300;
  const pivotY = 50;
  const pendLengthPx = pendLength * 65;
  const bobX = pivotX + Math.sin(currentPendAngleRad) * pendLengthPx;
  const bobY = pivotY + Math.cos(currentPendAngleRad) * pendLengthPx;


  // --- 5. KEPLER GEZEGEN YÖRÜNGE MEKANİĞİ (PLANETARY ORBIT GRAPHICS) ---
  const [orbRadius, setOrbRadius] = useState(150); // starting orbital height px (70 - 220)
  const [orbMass, setOrbMass] = useState(3.5); // core planet gravitational index (1 - 5)
  const [orbVelMultiplier, setOrbVelMultiplier] = useState(1.0); // manual velocity fraction
  const [orbIsRunning, setOrbIsRunning] = useState(false);
  const [orbStatus, setOrbStatus] = useState<'idle' | 'orbiting' | 'crashed' | 'escaped'>('idle');

  // SVG dimensions & coordinates matching planetary center (300, 175)
  const G_CONST = 1300;
  const idealCircVelocity = useMemo(() => {
    return Math.sqrt((G_CONST * orbMass) / orbRadius);
  }, [orbRadius, orbMass]);

  const [orbState, setOrbState] = useState<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    path: { x: number; y: number }[];
  }>({
    x: 300 + 150,
    y: 175,
    vx: 0,
    vy: -idealCircVelocity,
    path: []
  });

  const orbitRef = useRef({
    x: 300 + 150,
    y: 175,
    vx: 0,
    vy: -idealCircVelocity,
    path: [] as { x: number; y: number }[]
  });

  // Automatically recalculate orbital setup on panel adjustment
  useEffect(() => {
    const startVy = -idealCircVelocity * orbVelMultiplier;
    const startX = 300 + orbRadius;
    const startY = 175;

    orbitRef.current = {
      x: startX,
      y: startY,
      vx: 0,
      vy: startVy,
      path: []
    };

    setOrbState({
      x: startX,
      y: startY,
      vx: 0,
      vy: startVy,
      path: []
    });
    setOrbStatus('idle');
    setOrbIsRunning(false);
  }, [orbRadius, orbMass, orbVelMultiplier, idealCircVelocity]);

  // Gravity integration loop using requestAnimationFrame for smooth physics rendering
  useEffect(() => {
    let animFrameId: number;

    const gravityStep = () => {
      if (!orbIsRunning) return;

      const current = orbitRef.current;
      const rx = current.x - 300;
      const ry = current.y - 175;
      const dist = Math.sqrt(rx * rx + ry * ry);

      // Central planet collision check
      if (dist < 34) {
        setOrbStatus('crashed');
        setOrbIsRunning(false);
        return;
      }
      // Escape orbit check
      if (dist > 350) {
        setOrbStatus('escaped');
        setOrbIsRunning(false);
        return;
      }

      // Gravitational acceleration: a = G * M / r^2
      const dt = 0.12; 
      const gravitationalForceValue = (G_CONST * orbMass) / (dist * dist);
      const ax = - (rx / dist) * gravitationalForceValue;
      const ay = - (ry / dist) * gravitationalForceValue;

      current.vx += ax * dt;
      current.vy += ay * dt;
      current.x += current.vx * dt;
      current.y += current.vy * dt;

      const updatedPath = [...current.path, { x: current.x, y: current.y }];
      if (updatedPath.length > 200) {
        updatedPath.shift();
      }
      current.path = updatedPath;

      setOrbState({
        x: current.x,
        y: current.y,
        vx: current.vx,
        vy: current.vy,
        path: updatedPath
      });
      setOrbStatus('orbiting');

      animFrameId = requestAnimationFrame(gravityStep);
    };

    if (orbIsRunning && orbStatus !== 'crashed' && orbStatus !== 'escaped') {
      animFrameId = requestAnimationFrame(gravityStep);
    }

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [orbIsRunning, orbStatus, orbMass]);


  // Determine Orbit Mechanics Status Descriptor
  const getOrbitalClassification = () => {
    if (orbStatus === 'crashed') return 'Atmosferik Çöküş (Gezegene Çarptı)';
    if (orbStatus === 'escaped') return 'Hiperbolik Kaçış (Yörüngeden Çıktı)';
    if (orbVelMultiplier === 1.0) return 'Düzgün Çembersel Yörünge';
    if (orbVelMultiplier > 1.414) return 'Hiperbolik Kaçış Yörüngesi';
    return 'Eliptik Yörünge';
  };


  return (
    <div className="space-y-6">
      {/* Simulation Selector Bar */}
      <h3 className="text-xs font-black text-cyan-400 tracking-widest uppercase mb-1">
        FİZİK LABORATUVAR DENEYLERİ
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 border-b border-slate-800 pb-4">
        {[
          { id: 'projectile', label: 'Eğik Atış Laboratuvarı', desc: 'Sürtünmeli Atışlar', icon: Compass },
          { id: 'refraction', label: 'Işık Kırılma Tankı', desc: 'Prizma Dispersion', icon: Layers },
          { id: 'circuit', label: 'Ohm & Kısa Devre', desc: 'Akım & Güvenlik Sigortası', icon: Battery },
          { id: 'pendulum', label: 'Basit Sarkaç', desc: 'Harmonik Enerji Analizi', icon: Timer },
          { id: 'gravity_orbit', label: 'Kütleçekim & Kepler', desc: 'Doğal Uydu Yörüngesi', icon: Activity },
        ].map((sim) => {
          const Icon = sim.icon;
          const isActive = activeSim === sim.id;
          return (
            <button
              key={sim.id}
              onClick={() => {
                setActiveSim(sim.id as any);
                setProjIsRunning(false);
                setPendIsRunning(false);
                setOrbIsRunning(false);
              }}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                isActive 
                  ? 'border-cyan-500/50 bg-cyan-950/20 text-cyan-400 font-extrabold ring-1 ring-cyan-500/10' 
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-500'}`}>
                   <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{sim.label}</h4>
                  <p className="text-[10px] text-slate-400 font-medium truncate">{sim.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SIMULATION CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* PARAMS CONTROL PANEL */}
        <div className="lg:col-span-4 space-y-4">
          <div className="physics-glass-card p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Zap className="h-4 w-4 text-cyan-500" />
              <span>Deney Parametreleri</span>
            </h3>

            {/* --- PROJECTILE LAB CONTROLS --- */}
            {activeSim === 'projectile' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>İlk Hız (v₀)</span>
                    <span className="text-cyan-400 font-bold">{projVelocity} m/s</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="55"
                    step="1"
                    value={projVelocity}
                    onChange={(e) => {
                      setProjVelocity(Number(e.target.value));
                      handleProjReset();
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    disabled={projIsRunning}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Atış Açısı (θ)</span>
                    <span className="text-cyan-400 font-bold">{projAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="85"
                    step="1"
                    value={projAngle}
                    onChange={(e) => {
                      setProjAngle(Number(e.target.value));
                      handleProjReset();
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    disabled={projIsRunning}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1 flex-col">
                    <div className="flex justify-between w-full">
                      <span>Hava Sürtünme Katsayısı (b)</span>
                      <span className="text-cyan-400 font-bold">{projDrag === 0 ? 'Sürtünmesiz (Vakum)' : projDrag.toFixed(2)}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-normal">Sürtünme eklendikçe düşey kavis dikleşir!</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.6"
                    step="0.05"
                    value={projDrag}
                    onChange={(e) => {
                      setProjDrag(Number(e.target.value));
                      handleProjReset();
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    disabled={projIsRunning}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                      <span>Cisim Kütlesi</span>
                      <span className="text-cyan-400 font-bold">{projMass} kg</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="15"
                      step="0.5"
                      value={projMass}
                      onChange={(e) => {
                        setProjMass(Number(e.target.value));
                        handleProjReset();
                      }}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      disabled={projIsRunning}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                      <span>Yerçekimi (g)</span>
                      <span className="text-cyan-400 font-bold">{projGravity.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="6"
                      max="20"
                      step="0.2"
                      value={projGravity}
                      onChange={(e) => {
                        setProjGravity(Number(e.target.value));
                        handleProjReset();
                      }}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      disabled={projIsRunning}
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={handleProjLaunch}
                    disabled={projIsRunning}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 rounded-lg transition-colors cursor-pointer"
                  >
                    <Play className="h-3 w-3" />
                    <span>Fırlat!</span>
                  </button>
                  <button
                    onClick={handleProjReset}
                    className="flex items-center justify-center p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* --- REFRACTION CONTROLS --- */}
            {activeSim === 'refraction' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Lazer Geliş Açısı (θ₁)</span>
                    <span className="text-cyan-400 font-bold">{refAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="88"
                    step="1"
                    value={refAngle}
                    onChange={(e) => setRefAngle(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>1. Ortam Kırılma İndisi (n₁)</span>
                    <span className="text-cyan-400 font-bold">{n1Base.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="2.4"
                    step="0.05"
                    value={n1Base}
                    onChange={(e) => setN1Base(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>2. Ortam Kırılma İndisi (n₂)</span>
                    <span className="text-cyan-400 font-bold">{n2Base.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="2.4"
                    step="0.05"
                    value={n2Base}
                    onChange={(e) => setN2Base(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                {/* Laser Wavelength Dynamic Colorizer (Spectra Dispersion) */}
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 mb-2 uppercase">Lazer Dalgaboyu (Kromatik Dağılım)</span>
                  <div className="grid grid-cols-3 gap-1 px-1 py-1 bg-slate-950 rounded-lg border border-slate-800">
                    {[
                      { key: 'red', label: '650nm (Kırmızı)', color: 'text-red-500' },
                      { key: 'green', label: '532nm (Yeşil)', color: 'text-green-500' },
                      { key: 'violet', label: '405nm (Mor)', color: 'text-purple-400' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setLaserColor(opt.key as any)}
                        className={`text-[9px] py-1.5 rounded-md font-extrabold transition-all cursor-pointer ${
                          laserColor === opt.key 
                            ? 'bg-slate-800 text-white shadow-md border border-slate-700' 
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <span className={opt.color}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase">Ön Tanımlı Ortam Çiftleri</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button 
                      onClick={() => { setN1Base(1.0); setN2Base(1.50); }} 
                      className="text-[10px] py-1 border border-slate-800 rounded-md bg-slate-900 hover:bg-slate-850 text-slate-300 font-bold cursor-pointer"
                    >
                      Hava → Cam (1.5)
                    </button>
                    <button 
                      onClick={() => { setN1Base(1.33); setN2Base(1.0); }} 
                      className="text-[10px] py-1 border border-slate-800 rounded-md bg-slate-900 hover:bg-slate-850 text-slate-300 font-bold cursor-pointer"
                    >
                      Su → Hava (Critical)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- CIRCUITS CONTROLS --- */}
            {activeSim === 'circuit' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Güç Kaynağı Volt değeri (U)</span>
                    <span className="text-cyan-400 font-bold">{circuitVoltage} V</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    step="1"
                    value={circuitVoltage}
                    onChange={(e) => setCircuitVoltage(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Reosta Direnci (R)</span>
                    <span className="text-cyan-400 font-bold">{circuitResistance} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={circuitResistance}
                    onChange={(e) => setCircuitResistance(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Sigorta Akım Kesme Sınırı</span>
                    <span className="text-amber-400 font-bold">{fuseLimit.toFixed(1)} A</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="10.0"
                    step="0.5"
                    value={fuseLimit}
                    onChange={(e) => setFuseLimit(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button 
                    onClick={() => {
                      if (sigortaAtik) {
                        setSigortaAtik(false);
                      }
                      setCircuitSwitchOn(!circuitSwitchOn);
                    }}
                    className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      circuitSwitchOn 
                        ? 'bg-amber-600/20 text-amber-200 border-amber-500/30 hover:bg-amber-600/30' 
                        : 'bg-emerald-600/25 text-emerald-200 border-emerald-500/30 hover:bg-emerald-600/45'
                    }`}
                  >
                    Anahtar Durumu: {circuitSwitchOn ? 'KAPALI (Akım Geçiyor)' : 'AÇIK (Akım Kesik)'}
                  </button>

                  {sigortaAtik && (
                    <button 
                      onClick={() => {
                        setSigortaAtik(false);
                        setCircuitSwitchOn(true);
                      }}
                      className="w-full py-2.5 rounded-lg text-xs font-bold transition-all bg-red-950 text-red-200 border border-red-500/50 hover:bg-red-900 animate-pulse cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <AlertTriangle className="h-4.5 w-4.5 text-red-400" />
                      <span>SİGORTAYI YENİLE</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* --- SIMPLE PENDULUM OSCILLATOR CONTROLS --- */}
            {activeSim === 'pendulum' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Sarkaç İp Boyu (L)</span>
                    <span className="text-cyan-400 font-bold">{pendLength.toFixed(1)} metre</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="3.8"
                    step="0.1"
                    value={pendLength}
                    onChange={(e) => {
                      setPendLength(Number(e.target.value));
                      setPendTime(0);
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Başlangıç Sapma Açısı (θ₀)</span>
                    <span className="text-cyan-400 font-bold">{pendAngle0}°</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="75"
                    step="15"
                    value={pendAngle0}
                    onChange={(e) => {
                      setPendAngle0(Number(e.target.value));
                      setPendTime(0);
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Amortisör / Damping Oranı</span>
                    <span className="text-cyan-400 font-bold">{pendDamping === 0 ? 'Sürtünmesiz (İdeal)' : pendDamping.toFixed(3)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.05"
                    step="0.005"
                    value={pendDamping}
                    onChange={(e) => {
                      setPendDamping(Number(e.target.value));
                      setPendTime(0);
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                      <span>Kütle (m)</span>
                      <span className="text-cyan-400 font-bold">{pendMass.toFixed(1)} kg</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="10.0"
                      step="0.5"
                      value={pendMass}
                      onChange={(e) => setPendMass(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                      <span>Yerçekimi (g)</span>
                      <span className="text-cyan-400 font-bold">{pendGravity.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="5.0"
                      max="20.0"
                      step="0.2"
                      value={pendGravity}
                      onChange={(e) => {
                        setPendGravity(Number(e.target.value));
                        setPendTime(0);
                      }}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setPendIsRunning(!pendIsRunning)}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{pendIsRunning ? 'Durdur' : 'Sallandır!'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setPendIsRunning(false);
                      setPendTime(0);
                    }}
                    className="flex items-center justify-center p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* --- GRAVITY ORBIT CONTROLS --- */}
            {activeSim === 'gravity_orbit' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Yörünge Başlangıç Yarıçapı</span>
                    <span className="text-cyan-400 font-bold">{orbRadius} px</span>
                  </div>
                  <input
                    type="range"
                    min="75"
                    max="220"
                    step="5"
                    value={orbRadius}
                    onChange={(e) => setOrbRadius(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    disabled={orbIsRunning}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Merkezi Yıldız / Gezegen Kütlesi</span>
                    <span className="text-cyan-400 font-bold">{orbMass.toFixed(1)} M₀</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="5.0"
                    step="0.2"
                    value={orbMass}
                    onChange={(e) => setOrbMass(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    disabled={orbIsRunning}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-[4px] flex-col">
                    <div className="flex justify-between w-full">
                      <span>Fırlatma Teğetsel Hızı (v / v_c)</span>
                      <span className="text-cyan-400 font-bold">{orbVelMultiplier.toFixed(2)}x</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-normal">1.00 tam dairesel geoid yörünge çizer!</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="1.8"
                    step="0.05"
                    value={orbVelMultiplier}
                    onChange={(e) => setOrbVelMultiplier(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    disabled={orbIsRunning}
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => {
                      if (orbStatus === 'crashed' || orbStatus === 'escaped') {
                        // Reset first
                        const vC = Math.sqrt((G_CONST * orbMass) / orbRadius);
                        orbitRef.current = {
                          x: 300 + orbRadius,
                          y: 175,
                          vx: 0,
                          vy: -vC * orbVelMultiplier,
                          path: []
                        };
                        setOrbState({
                          x: 300 + orbRadius,
                          y: 175,
                          vx: 0,
                          vy: -vC * orbVelMultiplier,
                          path: []
                        });
                        setOrbStatus('idle');
                      }
                      setOrbIsRunning(!orbIsRunning);
                    }}
                    className={`flex-1 flex items-center justify-center space-x-1 py-2 px-3 text-xs font-bold text-white rounded-lg transition-colors cursor-pointer ${
                      orbIsRunning ? 'bg-amber-600 hover:bg-amber-500' : 'bg-cyan-600 hover:bg-cyan-500'
                    }`}
                  >
                    <span>{orbIsRunning ? 'Sarmalı Durdur' : 'Yörüngeye Sok!'}</span>
                  </button>
                  <button
                    onClick={() => {
                      const vC = Math.sqrt((G_CONST * orbMass) / orbRadius);
                      orbitRef.current = {
                        x: 300 + orbRadius,
                        y: 175,
                        vx: 0,
                        vy: -vC * orbVelMultiplier,
                        path: []
                      };
                      setOrbState({
                        x: 300 + orbRadius,
                        y: 175,
                        vx: 0,
                        vy: -vC * orbVelMultiplier,
                        path: []
                      });
                      setOrbStatus('idle');
                      setOrbIsRunning(false);
                    }}
                    className="flex items-center justify-center p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SIMULATION TASK GUIDE */}
          <div className="physics-info-box-amber p-4 space-y-2">
            <h4 className="text-xs font-bold text-amber-500 flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              <span>Laboratuvar Görevi</span>
            </h4>
            <p className="text-[11px] text-amber-400/90 leading-relaxed font-semibold">
              {activeSim === 'projectile' && 'Sürtünme sliderını yükselt ve fırlat! Sürtünme varken menzilin dairesel bir parabol olmaktan çıkıp, rüzgar direnciyle yere daha dik çakıldığını (balistik eğri) incele.'}
              {activeSim === 'refraction' && 'Su (n₁=1.33) ortamından Hava (n₂=1.0) ortamına lazer tutarak Sınır Açısını bul. Gelme açısını sınır açısının üzerine çıkartıp Tam Yasıma olayını gerçekleştir! Mor lazerin dalgaboyu nedeniyle kırmızı lazere göre daha fazla büküldüğünü (dağılım) doğrula.'}
              {activeSim === 'circuit' && 'Volt değerini 20V, Direnci 2 Ohm yap. Akım 10 Ampere çıktığında belirlenen sigorta sınırını aşarak devreyi anında güvenlik kilidine geçiren sistemi test et.'}
              {activeSim === 'pendulum' && 'Genlik sönümlendikçe Kinetik ve Potansiyel enerji barlarının birbirine dönüşümdeki düşüş hızını gör. Sarkaç uzunluğunu (L) kısaltarak periyodun tıkır tıkır hızlandığını gözlemle.'}
              {activeSim === 'gravity_orbit' && 'Uydunun Dünya etrafındaki durumunu izle. Fırlatma hızını 0.70x değerine düşürürsen uydunun füzeyle yer yüzüne çakıldığını; 1.50x üzerine kararlı teğetten yükseltirsen kaçışa geçtiğini doğrula.'}
            </p>
          </div>
        </div>

        {/* SANDBOX CANVAS & LIVE METRICS RESULTS */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-inner relative min-h-[410px] overflow-hidden flex items-center justify-center">
            
            {/* Background grid */}
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }} />

            {/* --- PROJECTILE SIMULATION INTERACTIVE SVG --- */}
            {activeSim === 'projectile' && (
              <svg className="w-full h-full min-h-[385px] z-10" viewBox="0 0 600 350">
                <defs>
                  <pattern id="gridSub" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridSub)" />

                {/* Sky & Grass indicators */}
                <line x1="0" y1="310" x2="600" y2="310" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <rect x="0" y="310" width="600" height="40" fill="rgba(34,197,94,0.08)" />

                {/* Static ideal flight curve preview trajectory (dotted) */}
                {trajData.path.length > 1 && (
                  <path
                    d={`M 30 ${310 - trajData.path[0].y * 2.1} ` + trajData.path.map(p => `L ${30 + p.x * 2.1} ${310 - p.y * 2.1}`).join(' ')}
                    fill="none"
                    stroke="rgba(8,145,178,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                )}

                {/* Real-time calculated launch path trail */}
                {trajData.path.filter(p => p.t <= projTime).length > 1 && (
                  <path
                    d={`M 30 ${310 - trajData.path[0].y * 2.1} ` + trajData.path.filter(p => p.t <= projTime).map(p => `L ${30 + p.x * 2.1} ${310 - p.y * 2.1}`).join(' ')}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    opacity="0.95"
                  />
                )}

                {/* Target Landing range marker */}
                <circle cx={40 + trajData.xMax * 2.1} cy="310" r="7" fill="#fb923c" opacity="0.35" className="animate-ping" />
                <circle cx={40 + trajData.xMax * 2.1} cy="310" r="4.5" fill="#fb923c" />

                {/* Animated Projectile Ball */}
                <circle
                  cx={30 + currentX * 2.1}
                  cy={310 - currentY * 2.1}
                  r={Math.max(6, projMass * 1.1)}
                  fill="#ffffff"
                  stroke="#0891b2"
                  strokeWidth="3.5"
                  className="transition-all duration-75"
                />

                {/* Velocity vectors illustration on active projectile */}
                {projIsRunning && (
                  <g transform={`translate(${30 + currentX * 2.1}, ${310 - currentY * 2.1})`}>
                    <line x1="0" y1="0" x2={currentVx * 1.2} y2="0" stroke="#f43f5e" strokeWidth="2" />
                    <text x={currentVx * 1.2 + 4} y="3" fill="#f43f5e" className="font-mono text-[9px] font-bold">Vx</text>
                    
                    <line x1="0" y1="0" x2="0" y2={-currentVy * 1.2} stroke="#3b82f6" strokeWidth="2" />
                    <text x="5" y={-currentVy * 1.2 - 2} fill="#3b82f6" className="font-mono text-[9px] font-bold">Vy</text>
                  </g>
                )}

                {/* Left Top Info Box Overlay */}
                <g transform="translate(18, 25)" className="font-mono text-[10px]" fill="rgba(255,255,255,0.7)">
                  <text y="0"><tspan fill="#22d3ee">Anlık Konum X (Menzil):</tspan> {currentX.toFixed(1)} m</text>
                  <text y="16"><tspan fill="#22d3ee">Anlık Yükseklik Y:</tspan> {currentY.toFixed(1)} m</text>
                  <text y="32"><tspan fill="#22d3ee">Uçuş Zamanı (t):</tspan> {projTime.toFixed(2)} s</text>
                  <text y="48" fill="#fb923c">Karakteristik: {projDrag > 0 ? 'Balistik Hava Sürtünmeli' : 'İdeal Boşluk (Vakum)'}</text>
                </g>
              </svg>
            )}

            {/* --- OPTICS REFRACTION INTERACTIVE SVG --- */}
            {activeSim === 'refraction' && (
              <svg className="w-full h-full min-h-[385px] z-10" viewBox="0 0 600 350">
                {/* Boundary Water tank partition background */}
                <rect x="0" y="175" width="600" height="175" fill="rgba(8,145,178,0.12)" stroke="rgba(8,145,178,0.2)" strokeWidth="1" />
                <line x1="0" y1="175" x2="600" y2="175" stroke="#0891b2" strokeWidth="2.5" strokeDasharray="5 4" />

                {/* Normal Normal Normal */}
                <line x1="300" y1="15" x2="300" y2="335" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="6 6" />

                {/* Labels */}
                <text x="20" y="35" fill="rgba(255,255,255,0.5)" className="font-serif text-[11px] font-bold uppercase tracking-wider">1. Ortam (n₁ = {n1.toFixed(2)})</text>
                <text x="20" y="200" fill="rgba(255,255,255,0.5)" className="font-serif text-[11px] font-bold uppercase tracking-wider">2. Ortam (n₂ = {n2.toFixed(2)})</text>

                {/* Laser Ray Entrance */}
                {(() => {
                  const xStart = 300 - 165 * Math.sin(refAngleRad);
                  const yStart = 175 - 165 * Math.cos(refAngleRad);
                  const laserHex = getLaserHexColor();
                  return (
                    <g>
                      <circle cx={xStart} cy={yStart} r="6.5" fill={laserHex} className="animate-pulse" />
                      <line x1={xStart} y1={yStart} x2="300" y2="175" stroke={laserHex} strokeWidth="3" opacity="0.9" />
                      
                      {/* Incoming light angle arc */}
                      <path d={`M 300 ${175 - 40} A 40 40 0 0 ${refAngle > 0 ? 0 : 1} ${300 - 40 * Math.sin(refAngleRad)} ${175 - 40 * Math.cos(refAngleRad)}`} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    </g>
                  );
                })()}

                {/* Snell Refracted / Reflected Ray drawing */}
                {isTotalReflection ? (
                  // Total Reflection
                  (() => {
                    const xEnd = 300 + 165 * Math.sin(refAngleRad);
                    const yEnd = 175 - 165 * Math.cos(refAngleRad);
                    const laserHex = getLaserHexColor();
                    return (
                      <g>
                        <line x1="300" y1="175" x2={xEnd} y2={yEnd} stroke={laserHex} strokeWidth="3" />
                        <line x1="300" y1="175" x2="300" y2="280" stroke="rgba(239,68,68,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                        <text x="320" y="150" fill="#f43f5e" className="font-mono text-[10px] font-black uppercase tracking-wider animate-pulse">
                          Tam Yansıma Koridoru! (θ₁ &gt; θ_s)
                        </text>
                      </g>
                    );
                  })()
                ) : (
                  // normal refraction
                  (() => {
                    const xEnd = 300 + 165 * Math.sin(refractAngleRad);
                    const yEnd = 175 + 165 * Math.cos(refractAngleRad);
                    const laserHex = getLaserHexColor();
                    return (
                      <g>
                        <line x1="300" y1="175" x2={xEnd} y2={yEnd} stroke={laserHex} strokeWidth="2.5" />
                        {/* faint reflection ray */}
                        <line x1="300" y1="175" x2={300 + 165 * Math.sin(refAngleRad)} y2={175 - 165 * Math.cos(refAngleRad)} stroke={laserHex} strokeWidth="1" opacity="0.32" />
                        <path d={`M 300 ${175 + 40} A 40 40 0 0 0 ${300 + 40 * Math.sin(refractAngleRad)} ${175 + 40 * Math.cos(refractAngleRad)}`} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      </g>
                    );
                  })()
                )}

                {/* Metrics */}
                <g className="font-mono text-[10px]" fill="rgba(255,255,255,0.65)">
                  <text x="225" y="145">Gelme θ₁ = {refAngle}°</text>
                  {!isTotalReflection && <text x="325" y="210">Kırılma θ₂ = {Math.round(refractAngle)}°</text>}
                  {criticalAngle && <text x="25" y="60" fill="#f59e0b" className="font-bold">Kritik Sınır Açısı (θ_s) = {criticalAngle.toFixed(1)}°</text>}
                  <text x="25" y="85" fill="#a855f7">Lazer Kromatik Dispersiyon Kayması: {refractiveOffset > 0 ? '+' : ''}{refractiveOffset ? refractiveOffset.toFixed(2) : '0'}</text>
                </g>
              </svg>
            )}

            {/* --- POWER CIRCUITS INTERACTIVE SVG --- */}
            {activeSim === 'circuit' && (
              <svg className="w-full h-full min-h-[385px] z-10" viewBox="0 0 600 350">
                {/* Circuit wire loops */}
                <rect x="100" y="75" width="400" height="200" fill="none" stroke="#475569" strokeWidth="4.5" rx="14" />

                {/* Ampermetre frame */}
                <g transform="translate(100, 140)">
                  <circle cx="0" cy="30" r="22" fill="#0f172a" stroke="#06b6d4" strokeWidth="2.5" />
                  <text x="-14" y="34" fill="#06b6d4" className="font-mono font-black text-[11px]">A: {circuitCurrent.toFixed(2)}A</text>
                </g>

                {/* Switch drawing based on circuit voltage and fuse */}
                {circuitSwitchOn && !sigortaAtik ? (
                  <line x1="280" y1="75" x2="320" y2="75" stroke="#10b981" strokeWidth="6" />
                ) : (
                  <g>
                    {/* Switch flipped open */}
                    <line x1="280" y1="75" x2="310" y2="45" stroke="#ef4444" strokeWidth="6" />
                    <circle cx="280" cy="75" r="5" fill="#f43f5e" />
                    <circle cx="320" cy="75" r="5" fill="#f43f5e" />
                  </g>
                )}

                {/* Resistor body (Reosta) */}
                <g transform="translate(260, 260)">
                  <rect width="80" height="30" fill="#1e293b" stroke="#64748b" strokeWidth="2.5" rx="6" />
                  {/* color strips */}
                  <rect x="20" y="1" width="7" height="28" fill="#a855f7" />
                  <rect x="36" y="1" width="7" height="28" fill="#22c55e" />
                  <rect x="52" y="1" width="7" height="28" fill="#f59e0b" />
                  <text x="18" y="44" fill="#e2e8f0" className="font-mono text-[10px] font-extrabold">Reosta: {circuitResistance}Ω</text>
                </g>

                {/* Battery representation */}
                <g transform="translate(485, 140)">
                  <rect x="-10" y="5" width="20" height="50" fill="#1e293b" stroke="#f43f5e" strokeWidth="2.5" rx="4" />
                  <rect x="-6" y="12" width="12" height="15" fill="#f43f5e" />
                  <text x="-12" y="-10" fill="#f43f5e" className="font-mono text-[10px] font-black">Pil: {circuitVoltage}V</text>
                </g>

                {/* Lightbulb load with reactive glow power scale */}
                <g transform="translate(275, 115)">
                  {/* filament */}
                  <path d="M 12 30 Q 25 10 38 30" fill="none" stroke="#64748b" strokeWidth="2" />
                  <circle cx="25" cy="20" r="22" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  
                  {/* dynamic light glow based on power output */}
                  {circuitSwitchOn && circuitCurrent > 0 && (
                    <g>
                      <circle cx="25" cy="20" r={Math.min(95, 20 + powerW * 1.5)} fill="#fbbf24" opacity={Math.min(0.68, 0.15 + powerW * 0.005)} className="blur-md" />
                      <circle cx="25" cy="20" r="25" fill="#fef08a" opacity="0.3" className="blur-xs" />
                    </g>
                  )}
                  <text x="-14" y="-12" fill="#f59e0b" className="font-mono text-[10px] font-extrabold text-center">Ampul Gücü: {powerW.toFixed(1)}W</text>
                </g>

                {/* Spark / Flame warning on fuses and high current limits */}
                {sigortaAtik && (
                  <g transform="translate(300, 75)" className="animate-bounce">
                    <circle cx="0" cy="0" r="35" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" className="animate-spin" />
                    <path d="M -10 -5 L 0 -25 L 10 -5 L 0 15 Z" fill="#ef4444" opacity="0.8" />
                    <text x="-32" y="28" fill="#f87171" className="font-sans font-black text-[9px] bg-slate-950 p-1 rounded">SİGORTA ATTI!</text>
                  </g>
                )}

                {/* Flowing simulated electrons along secondary line */}
                {circuitSwitchOn && circuitCurrent > 0 && (
                  <g>
                    {[0, 12, 24, 36, 48, 60, 72, 84, 96].map((elem, eIdx) => {
                      const percentage = (electronOffset + elem) % 100;
                      let ex = 0;
                      let ey = 0;
                      // Wire path mapping matching outer bounding layout rect: 100 to 500 width, 75 to 275 height
                      if (percentage < 33) {
                        ex = 100 + (percentage / 33) * 400;
                        ey = 75;
                      } else if (percentage < 50) {
                        ex = 500;
                        ey = 75 + ((percentage - 33) / 17) * 200;
                      } else if (percentage < 83) {
                        ex = 500 - ((percentage - 50) / 33) * 400;
                        ey = 275;
                      } else {
                        ex = 100;
                        ey = 275 - ((percentage - 83) / 17) * 200;
                      }
                      return (
                        <circle key={eIdx} cx={ex} cy={ey} r="4.5" fill="#67e8f9" className="animate-pulse shadow-cyan" />
                      );
                    })}
                  </g>
                )}
              </svg>
            )}

            {/* --- NEW! BASİT SARKAÇ SIMULATOR SVG --- */}
            {activeSim === 'pendulum' && (
              <svg className="w-full h-full min-h-[385px] z-10" viewBox="0 0 600 350">
                {/* Ceiling bar */}
                <line x1="200" y1="50" x2="400" y2="50" stroke="#475569" strokeWidth="5" />
                <rect x="280" y="45" width="40" height="5" fill="#64748b" />
                <circle cx={pivotX} cy={pivotY} r="4" fill="#ffffff" />

                {/* Angular limits dot guide */}
                <path d={`M ${pivotX - pendLengthPx * Math.sin(theta0Rad)} ${pivotY + pendLengthPx * Math.cos(theta0Rad)} A ${pendLengthPx} ${pendLengthPx} 0 0 0 ${pivotX + pendLengthPx * Math.sin(theta0Rad)} ${pivotY + pendLengthPx * Math.cos(theta0Rad)}`} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />

                {/* String representation */}
                <line x1={pivotX} y1={pivotY} x2={bobX} y2={bobY} stroke="#cbd5e1" strokeWidth="2" strokeOpacity="0.85" />

                {/* Animated Bob Circle */}
                <circle
                  cx={bobX}
                  cy={bobY}
                  r={12 + pendMass * 1.5}
                  fill="url(#bobGrad)"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  className="shadow-lg cursor-grab"
                />

                <defs>
                  <radialGradient id="bobGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </radialGradient>
                </defs>

                {/* Live Dynamics Vector analysis overlays on bob! */}
                {pendIsRunning && (
                  <g transform={`translate(${bobX}, ${bobY})`}>
                    {/* 1. Gravity Vector (Yerçekimi Kuvveti: Downward, Green) */}
                    <line x1="0" y1="0" x2="0" y2={45} stroke="#22c55e" strokeWidth="2" />
                    <text x="5" y="42" fill="#22c55e" className="font-mono text-[8.5px] font-extrabold">F_g (Yerçekimi)</text>

                    {/* 2. Tension Vector (İp Gerilmesi: directed along the string, Pink) */}
                    {(() => {
                      const tLen = -55; // relative length pointing up
                      const tx = Math.sin(currentPendAngleRad) * tLen;
                      const ty = Math.cos(currentPendAngleRad) * tLen;
                      return (
                        <g>
                          <line x1="0" y1="0" x2={tx} y2={ty} stroke="#fb7185" strokeWidth="2" />
                          <text x={tx - 10} y={ty - 4} fill="#fb7185" className="font-mono text-[8.5px] font-extrabold">T (Tension)</text>
                        </g>
                      );
                    })()}

                    {/* 3. Restoring Net Force (Geri Çağırıcı Kuvvet: Tangential direction, Blue) */}
                    {(() => {
                      const rLen = -currentPendAngleRad * 70; // proportional to angle
                      const rx = Math.cos(currentPendAngleRad) * rLen;
                      const ry = -Math.sin(currentPendAngleRad) * rLen;
                      return (
                        <g>
                          <line x1="0" y1="0" x2={rx} y2={ry} stroke="#38bdf8" strokeWidth="2" />
                          <text x={rx + 4} y={ry + 3} fill="#38bdf8" className="font-mono text-[8.5px] font-extrabold">F_net</text>
                        </g>
                      );
                    })()}
                  </g>
                )}

                {/* Energy balance visual charts */}
                <g transform="translate(18, 25)" className="font-mono text-[10px]" fill="rgba(255,255,255,0.7)">
                  <text y="0"><tspan fill="#38bdf8">Anlık Açı Oranı (θ):</tspan> {currentPendAngleDeg.toFixed(1)}°</text>
                  <text y="16"><tspan fill="#38bdf8">Teorik Salınım Periyodu (T):</tspan> {tPendulum.toFixed(3)} s</text>
                  <text y="32"><tspan fill="#38bdf8">Frekans (f):</tspan> {(1 / tPendulum).toFixed(2)} Hz</text>
                  <text y="48"><tspan fill="#fb7185">Maksimum Yükseklik h:</tspan> {(maxAvailableH * 100).toFixed(1)} cm</text>
                </g>

                {/* Bottom interactive energy gauge inside SVG */}
                <g transform="translate(150, 310)">
                  <text x="0" y="10" fill="#cbd5e1" className="font-sans text-[9px] font-black uppercase">Enerji Korunumu Skalası (PE &lt;&gt; KE)</text>
                  <rect x="0" y="15" width="280" height="9" fill="#1e293b" rx="4" />
                  
                  {/* Potential Energy Bar (Orange) */}
                  {totalEPend > 0 && (
                    <rect x="0" y="15" width={(pePend / totalEPend) * 280} height="9" fill="#fb923c" rx="4" opacity="0.8" />
                  )}
                  {/* Kinetic Energy Bar (Neon cyan) */}
                  {totalEPend > 0 && (
                    <rect x={(pePend / totalEPend) * 280} y="15" width={(kePend / totalEPend) * 280} height="9" fill="#22d3ee" rx="4" />
                  )}

                  <circle cx="10" cy="36" r="4" fill="#fb923c" />
                  <text x="18" y="39" fill="#fb923c" className="text-[9px] font-bold">Potansiyel: {pePend.toFixed(1)} J</text>

                  <circle cx="130" cy="36" r="4" fill="#22d3ee" />
                  <text x="138" y="39" fill="#22d3ee" className="text-[9px] font-bold">Kinetik: {kePend.toFixed(1)} J</text>
                </g>
              </svg>
            )}

            {/* --- NEW! GEZEGEN YÖRÜNGE SİMÜLATÖRÜ SVG --- */}
            {activeSim === 'gravity_orbit' && (
              <svg className="w-full h-full min-h-[385px] z-10" viewBox="0 0 600 350">
                {/* Central Massive star representation with magnetic gravity aura */}
                <g transform="translate(300, 175)">
                  {/* aura circles */}
                  <circle cx="0" cy="0" r="55" fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="1" className="animate-pulse" />
                  <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(245,158,11,0.03)" strokeWidth="0.5" strokeDasharray="6 6" />
                  
                  {/* planet body */}
                  <circle cx="0" cy="0" r="34" fill="url(#planetPattern)" stroke="#da7928" strokeWidth="2.5" />
                </g>

                <defs>
                  <radialGradient id="planetPattern" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#fed7aa" />
                    <stop offset="30%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#7c2d12" />
                  </radialGradient>
                </defs>

                {/* Satellite Trail History path drawing */}
                {orbState.path.length > 1 && (
                  <path
                    d={`M ${orbState.path[0].x} ${orbState.path[0].y} ` + orbState.path.map(p => `L ${p.x} ${p.y}`).join(' ')}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                    strokeDasharray="3 3.5"
                    opacity="0.8"
                  />
                )}

                {/* Satellite Body visual with dynamic panels oriented along direction vector */}
                {orbStatus !== 'crashed' && (
                  <g transform={`translate(${orbState.x}, ${orbState.y})`}>
                    {/* Solar arrays */}
                    <line x1="-12" y1="0" x2="12" y2="0" stroke="#a855f7" strokeWidth="3" />
                    {/* main fuselage */}
                    <circle cx="0" cy="0" r="5" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
                    {/* antenna core tip red */}
                    <circle cx="-1" cy="-4" r="1.5" fill="#ef4444" />
                  </g>
                )}

                {/* Crash explosion layout */}
                {orbStatus === 'crashed' && (
                  <g transform="translate(300, 175)" className="animate-ping">
                    <circle cx={orbState.x - 300} cy={orbState.y - 175} r="22" fill="#ef4444" opacity="0.8" />
                    <circle cx={orbState.x - 300} cy={orbState.y - 175} r="10" fill="#f97316" />
                    <text x={orbState.x - 300 - 15} y={orbState.y - 175 + 3} fill="#ffffff" className="font-mono text-[9px] font-extrabold uppercase">Çarpma!</text>
                  </g>
                )}

                {/* Live informational stats and classification */}
                <g transform="translate(18, 25)" className="font-mono text-[10px]" fill="rgba(255,255,255,0.7)">
                  <text y="0"><tspan fill="#38bdf8">Uydu Uzaklığı r:</tspan> {Math.sqrt(Math.pow(orbState.x - 300, 2) + Math.pow(orbState.y - 175, 2)).toFixed(1)} km</text>
                  <text y="16"><tspan fill="#38bdf8">Anlık Hız (v):</tspan> {Math.sqrt(orbState.vx * orbState.vx + orbState.vy * orbState.vy).toFixed(2)} km/s</text>
                  <text y="32"><tspan fill="#eab308">Gerekli Kritik Çembersel Hız (v_c):</tspan> {idealCircVelocity.toFixed(2)} km/s</text>
                  <text y="48"><tspan fill="#fb7185">Yörünge Modeli Sınıfı:</tspan> {getOrbitalClassification()}</text>
                </g>
              </svg>
            )}
          </div>

          {/* SIMULATION REAL TIME RESULTS VALUE DIALS */}
          <div className="physics-glass-card p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeSim === 'projectile' && (
              <>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Menzil (X_max)</span>
                    <p className="text-lg font-bold text-white">{trajData.xMax.toFixed(2)} <span className="text-xs text-slate-400 font-medium">m</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tepe Noktası (h_max)</span>
                    <p className="text-lg font-bold text-white">{trajData.hMax.toFixed(2)} <span className="text-xs text-slate-400 font-medium">m</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Uçuş Süresi (t_flight)</span>
                    <p className="text-lg font-bold text-white">{trajData.tFlight.toFixed(2)} <span className="text-xs text-slate-400 font-medium">sn</span></p>
                  </div>
                  <Activity className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
              </>
            )}

            {activeSim === 'refraction' && (
              <>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kırılma Açısı (θ₂)</span>
                    <p className="text-lg font-bold text-white">{isTotalReflection ? 'Yok (Tam Yansıma)' : `${Math.round(refractAngle)}°`}</p>
                  </div>
                  <Layers className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bağıl Kırılma İndisi</span>
                    <p className="text-lg font-bold text-white">{(n1 / n2).toFixed(2)}</p>
                  </div>
                  <Activity className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Işık Hızı Oranı v₁/v₂</span>
                    <p className="text-lg font-bold text-white">{(n2 / n1).toFixed(2)} <span className="text-xs text-slate-400 font-semibold">c</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
              </>
            )}

            {activeSim === 'circuit' && (
              <>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ampermetre (Cari Akım)</span>
                    <p className="text-lg font-bold text-white">{circuitCurrent.toFixed(2)} <span className="text-xs text-slate-400 font-medium">A</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Voltmetre (Gerilim)</span>
                    <p className="text-lg font-bold text-white">{circuitVoltage.toFixed(0)} <span className="text-xs text-slate-400 font-medium">V</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ampul Gücü (Power)</span>
                    <p className="text-lg font-bold text-white">{powerW.toFixed(0)} <span className="text-xs text-slate-400 font-medium">W</span></p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
              </>
            )}

            {activeSim === 'pendulum' && (
              <>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Açısal Frekans (ω)</span>
                    <p className="text-lg font-bold text-white">{omegaPend.toFixed(2)} <span className="text-xs text-slate-405 font-medium">rad/sn</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hassas Periyot (T)</span>
                    <p className="text-lg font-bold text-white">{tPendulum.toFixed(3)} <span className="text-xs text-slate-400 font-medium">sn</span></p>
                  </div>
                  <Activity className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ölçülen Maksimum Enerji</span>
                    <p className="text-lg font-bold text-white">{totalEPend.toFixed(1)} <span className="text-xs text-slate-400 font-medium">Joule</span></p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
              </>
            )}

            {activeSim === 'gravity_orbit' && (
              <>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kritik Yörünge Hızı v_c</span>
                    <p className="text-lg font-bold text-white">{idealCircVelocity.toFixed(2)} <span className="text-xs text-slate-400 font-medium">km/s</span></p>
                  </div>
                  <Gauge className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Gerçek Hız (v_sat)</span>
                    <p className={`text-lg font-bold ${orbStatus === 'escaped' ? 'text-red-400' : 'text-white'}`}>
                      {Math.sqrt(orbState.vx * orbState.vx + orbState.vy * orbState.vy).toFixed(2)} <span className="text-xs text-slate-400 font-medium">km/s</span>
                    </p>
                  </div>
                  <Activity className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
                <div className="physics-info-box p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kaçış Hızı Limiti (v_e)</span>
                    <p className="text-lg font-bold text-emerald-400">{(idealCircVelocity * 1.414).toFixed(2)} <span className="text-xs text-slate-400 font-medium">km/s</span></p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-cyan-400 shrink-0" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
