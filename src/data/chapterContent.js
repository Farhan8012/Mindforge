// Comprehensive Chapter Content - Like a Digital Textbook
// Each chapter has full educational content that students can read

export const chapterContent = {
    // PHYSICS - CLASS 11
    "Physical World and Measurement": {
        introduction: `Physics is the study of nature and natural phenomena. The word 'Physics' comes from the Greek word 'Fusis' meaning nature. It is the most fundamental of all sciences and provides a basis for understanding the physical world around us.`,
        sections: [
            {
                title: "What is Physics?",
                content: `Physics is the branch of science that deals with the study of matter, energy, and the interaction between them. It seeks to understand how the universe behaves at both the largest scales (galaxies, stars) and the smallest scales (atoms, subatomic particles).

**Scope of Physics:**
- **Classical Physics**: Mechanics, thermodynamics, optics, electromagnetism
- **Modern Physics**: Quantum mechanics, relativity, nuclear physics
- **Applied Physics**: Electronics, biophysics, astrophysics

Physics is exciting because it reveals the fundamental rules that govern everything from falling apples to orbiting planets!`,
                keyPoints: [
                    "Physics studies matter, energy, and their interactions",
                    "It ranges from subatomic particles to the entire universe",
                    "Physical laws are universal - they work everywhere"
                ]
            },
            {
                title: "Units and Dimensions",
                content: `Every measurement in physics requires a number and a unit. Without units, numbers are meaningless!

**SI Units (International System):**
The SI system has 7 base units:

| Quantity | Unit | Symbol |
|----------|------|--------|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric Current | ampere | A |
| Temperature | kelvin | K |
| Amount of Substance | mole | mol |
| Luminous Intensity | candela | cd |

**Why SI Units?**
Imagine telling a friend you ran "5" - 5 what? Meters? Kilometers? Miles? Units provide meaning to measurements and allow scientists worldwide to communicate precisely.

**Derived Units:**
All other units are derived from these base units. For example:
- Velocity = m/s (distance/time)
- Force = kg·m/s² = Newton (N)
- Energy = kg·m²/s² = Joule (J)`,
                keyPoints: [
                    "SI system has 7 fundamental base units",
                    "All measurements need both number and unit",
                    "Derived units come from combinations of base units"
                ],
                formulas: [
                    { name: "Velocity", formula: "v = distance/time", unit: "m/s" },
                    { name: "Acceleration", formula: "a = Δv/Δt", unit: "m/s²" },
                    { name: "Force", formula: "F = ma", unit: "N (Newton)" }
                ]
            },
            {
                title: "Dimensions and Dimensional Analysis",
                content: `Dimensions represent the physical nature of a quantity. They tell us what type of quantity we're dealing with.

**Dimensional Formula:**
Every physical quantity can be expressed in terms of fundamental dimensions:
- **[M]** - Mass
- **[L]** - Length  
- **[T]** - Time
- **[A]** - Electric Current
- **[K]** - Temperature
- **[mol]** - Amount of Substance
- **[cd]** - Luminous Intensity

**Examples:**
- Velocity: [L T⁻¹] (length divided by time)
- Force: [M L T⁻²] (from F = ma)
- Energy: [M L² T⁻²] (from E = ½mv²)

**Uses of Dimensional Analysis:**
1. **Checking equation correctness**: Both sides must have same dimensions
2. **Deriving relationships**: Find how quantities depend on each other
3. **Converting units**: From one system to another

**Example Problem:**
Check if the equation v = u + at is dimensionally correct.

*Solution:*
- [v] = [L T⁻¹]
- [u] = [L T⁻¹]
- [at] = [L T⁻²][T] = [L T⁻¹]

All terms have dimension [L T⁻¹]. ✓ Equation is dimensionally correct!`,
                keyPoints: [
                    "Dimensions represent physical nature of quantities",
                    "Dimensional analysis checks equation validity",
                    "Same dimensions can be added/subtracted"
                ]
            },
            {
                title: "Measurement Errors",
                content: `No measurement is perfect. Understanding errors helps us know how reliable our measurements are.

**Types of Errors:**

1. **Systematic Errors**: Consistent errors in one direction
   - Zero error in instruments
   - Improperly calibrated equipment
   - Personal bias of observer
   
2. **Random Errors**: Unpredictable variations
   - Changing experimental conditions
   - Observer's varying judgment
   - Reduced by taking multiple readings

3. **Gross Errors**: Human mistakes
   - Misreading instruments
   - Recording wrong values
   - Can be minimized by careful work

**Accuracy vs Precision:**
- **Accuracy**: How close to the true value
- **Precision**: How consistent repeated measurements are

A watch that's always 5 minutes fast is precise but not accurate!

**Significant Figures:**
Significant figures indicate the precision of a measurement.

Rules:
1. All non-zero digits are significant: 123.4 has 4 significant figures
2. Zeros between non-zero digits are significant: 102.5 has 4 significant figures
3. Leading zeros are NOT significant: 0.0025 has 2 significant figures
4. Trailing zeros after decimal are significant: 2.500 has 4 significant figures`,
                keyPoints: [
                    "Systematic errors are consistent; random errors vary",
                    "Accuracy = closeness to true value",
                    "Precision = consistency of measurements",
                    "Significant figures show measurement precision"
                ]
            }
        ],
        summary: `This chapter introduced the foundation of physics - measurement. You learned about SI units, dimensional analysis, and how to handle measurement errors. These skills are essential for all of physics!`,
        practiceQuestions: [
            {
                question: "Express the dimension of force in terms of fundamental dimensions.",
                hint: "Use F = ma and substitute dimensions of mass and acceleration.",
                answer: "[M L T⁻²]"
            },
            {
                question: "How many significant figures are in 0.00340?",
                hint: "Leading zeros are not significant, but trailing zeros after decimal are.",
                answer: "3 significant figures (3, 4, and the trailing 0)"
            },
            {
                question: "Check if the equation E = mgh is dimensionally correct.",
                hint: "Find dimensions of each side and compare.",
                answer: "[E] = [M L² T⁻²], [mgh] = [M][L T⁻²][L] = [M L² T⁻²]. ✓ Correct!"
            }
        ]
    },

    "Kinematics": {
        introduction: `Kinematics is the branch of mechanics that describes motion without considering the forces that cause it. It's the "what" of motion - position, velocity, and acceleration - without the "why."`,
        sections: [
            {
                title: "Motion in a Straight Line",
                content: `**Position and Displacement:**

Position is where an object is located relative to a reference point (origin). Displacement is the change in position - it's a vector quantity with both magnitude and direction.

*Key Difference:*
- **Distance**: Total path length traveled (scalar, always positive)
- **Displacement**: Shortest path from start to end (vector, can be negative)

If you walk 3m east then 3m west, your:
- Distance = 6m
- Displacement = 0m

**Speed and Velocity:**

Speed = |Distance / Time| (scalar)
Velocity = Displacement / Time (vector)

Average velocity: v̄ = Δx/Δt
Instantaneous velocity: v = dx/dt

**Acceleration:**

Acceleration is the rate of change of velocity.

a = Δv/Δt (average)
a = dv/dt (instantaneous)

Acceleration is also a vector. Negative acceleration (deceleration) means velocity is decreasing.`,
                keyPoints: [
                    "Displacement is a vector; distance is a scalar",
                    "Velocity has direction; speed doesn't",
                    "Acceleration is rate of change of velocity"
                ],
                formulas: [
                    { name: "Average Velocity", formula: "v̄ = Δx/Δt", unit: "m/s" },
                    { name: "Average Acceleration", formula: "ā = Δv/Δt", unit: "m/s²" }
                ]
            },
            {
                title: "Equations of Motion (Constant Acceleration)",
                content: `When acceleration is constant, we can use these powerful equations:

**The Three Kinematic Equations:**

1. **v = u + at**
   - Final velocity = Initial velocity + (acceleration × time)
   - Use when: you don't know displacement

2. **s = ut + ½at²**
   - Displacement = (initial velocity × time) + ½(acceleration × time²)
   - Use when: you don't know final velocity

3. **v² = u² + 2as**
   - Final velocity² = Initial velocity² + 2(acceleration × displacement)
   - Use when: you don't know time

**Variables:**
- u = initial velocity
- v = final velocity
- a = acceleration
- t = time
- s = displacement

**Problem-Solving Strategy:**
1. List KNOWN quantities (u, v, a, t, s)
2. Identify UNKNOWN quantity
3. Choose equation that doesn't need another unknown
4. Solve!

**Example:**
A car starts from rest and accelerates at 2 m/s² for 5 seconds. Find the distance covered.

*Solution:*
- u = 0 m/s (starts from rest)
- a = 2 m/s²
- t = 5 s
- s = ?

Using s = ut + ½at²:
s = (0)(5) + ½(2)(5²)
s = 0 + ½(2)(25)
s = 25 m`,
                keyPoints: [
                    "Three equations cover all constant acceleration problems",
                    "Each equation omits one variable - choose wisely",
                    "Always list knowns and unknowns first"
                ],
                formulas: [
                    { name: "First Equation", formula: "v = u + at", description: "No displacement" },
                    { name: "Second Equation", formula: "s = ut + ½at²", description: "No final velocity" },
                    { name: "Third Equation", formula: "v² = u² + 2as", description: "No time" }
                ]
            },
            {
                title: "Motion Under Gravity (Free Fall)",
                content: `Free fall is motion under the influence of gravity alone.

**Key Facts:**
- Acceleration due to gravity: g ≈ 9.8 m/s² (often approximated as 10 m/s²)
- Direction: Always downward (toward Earth's center)
- Independent of mass! A feather and hammer fall at same rate in vacuum.

**Equations for Free Fall:**
Replace 'a' with 'g' (or -g depending on sign convention):

Taking downward as positive:
- v = u + gt
- h = ut + ½gt²
- v² = u² + 2gh

**Object thrown upward:**
If you throw a ball up with velocity u:
- At highest point: v = 0
- Time to reach top: t = u/g
- Maximum height: h = u²/2g
- Total time in air: T = 2u/g

**Example:**
A ball is thrown upward with velocity 20 m/s. Find maximum height. (g = 10 m/s²)

*Solution:*
At maximum height, v = 0
Using v² = u² - 2gh (taking upward as positive)
0 = (20)² - 2(10)h
200 = 20h
h = 10 m`,
                keyPoints: [
                    "g = 9.8 m/s² (constant near Earth's surface)",
                    "All objects fall at same rate regardless of mass",
                    "At highest point of upward throw, velocity = 0"
                ]
            },
            {
                title: "Projectile Motion",
                content: `Projectile motion is motion in two dimensions under gravity - like a thrown ball or a kicked football.

**The Key Insight:**
Horizontal and vertical motions are INDEPENDENT!
- Horizontal: Constant velocity (no horizontal force)
- Vertical: Constant acceleration due to gravity

**Projectile at angle θ:**
Initial velocity components:
- Horizontal: uₓ = u cos θ
- Vertical: uᵧ = u sin θ

**Important Formulas:**

Time of flight: T = 2u sin θ / g

Maximum height: H = u² sin² θ / 2g

Range (horizontal distance): R = u² sin 2θ / g

**Maximum Range:**
R is maximum when sin 2θ = 1, i.e., when 2θ = 90°, i.e., θ = 45°

**Trajectory Equation:**
y = x tan θ - gx²/2u² cos² θ

This is a parabola!

**Example:**
A ball is projected at 30° with speed 20 m/s. Find the range. (g = 10 m/s²)

*Solution:*
R = u² sin 2θ / g
R = (20)² sin 60° / 10
R = 400 × (√3/2) / 10
R = 400 × 0.866 / 10
R = 34.64 m`,
                keyPoints: [
                    "Horizontal and vertical motions are independent",
                    "Horizontal velocity remains constant",
                    "Maximum range at 45° launch angle",
                    "Trajectory is a parabola"
                ],
                formulas: [
                    { name: "Time of Flight", formula: "T = 2u sin θ / g" },
                    { name: "Maximum Height", formula: "H = u² sin² θ / 2g" },
                    { name: "Range", formula: "R = u² sin 2θ / g" }
                ]
            },
            {
                title: "Relative Motion",
                content: `Relative motion deals with how motion appears from different reference frames.

**Relative Velocity:**
The velocity of object A as observed from object B:

v̄ₐᵦ = v̄ₐ - v̄ᵦ

**Examples:**

1. **Two cars moving in same direction:**
   If car A moves at 60 km/h and car B at 40 km/h (both eastward):
   Velocity of A relative to B = 60 - 40 = 20 km/h (eastward)
   A appears to move at 20 km/h to someone in B.

2. **Two cars moving in opposite directions:**
   If car A moves at 60 km/h east and car B at 40 km/h west:
   Velocity of A relative to B = 60 - (-40) = 100 km/h (eastward)
   They approach each other at 100 km/h!

3. **Rain and person:**
   Rain falling at 10 m/s vertically, person running at 5 m/s:
   Rain appears to come at an angle to the running person.
   Relative velocity = √(10² + 5²) = √125 ≈ 11.2 m/s at angle tan⁻¹(5/10) from vertical.

**River Crossing:**
A boat crossing a river must consider:
- Its own velocity
- River's current velocity
- Resultant velocity determines actual path`,
                keyPoints: [
                    "Relative velocity: v_AB = v_A - v_B",
                    "Same direction: subtract speeds",
                    "Opposite direction: add speeds",
                    "Use vector addition for 2D problems"
                ]
            }
        ],
        summary: `Kinematics describes motion using position, velocity, and acceleration. You learned the three equations of motion, free fall, projectile motion, and relative velocity. These concepts form the foundation for understanding dynamics (motion with forces).`,
        practiceQuestions: [
            {
                question: "A car accelerates from 10 m/s to 30 m/s in 4 seconds. What is the acceleration?",
                hint: "Use a = (v - u)/t",
                answer: "a = (30 - 10)/4 = 5 m/s²"
            },
            {
                question: "A ball is dropped from 80m height. How long does it take to hit the ground? (g = 10 m/s²)",
                hint: "Use h = ½gt² with u = 0",
                answer: "80 = ½(10)t², t² = 16, t = 4 seconds"
            },
            {
                question: "At what angle should a ball be projected to achieve maximum range?",
                hint: "When is sin 2θ maximum?",
                answer: "45° (since sin 2θ is maximum when 2θ = 90°)"
            }
        ]
    },

    "Laws of Motion": {
        introduction: `Newton's Laws of Motion explain WHY objects move the way they do. While kinematics describes motion, dynamics (Newton's laws) explains the causes of motion - forces.`,
        sections: [
            {
                title: "Newton's First Law (Law of Inertia)",
                content: `**Statement:**
"An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an unbalanced force."

**In Simple Terms:**
Objects resist changes to their motion. This resistance is called INERTIA.

**Examples:**
1. A book on a table stays there until you push it
2. When a bus suddenly stops, you lurch forward (your body wants to keep moving)
3. A hockey puck slides on ice for a long time (very little friction)
4. Dust flies off when you beat a carpet (carpet stops, dust keeps moving)

**Inertia and Mass:**
Mass is a measure of inertia. More massive objects are harder to start or stop.
- A loaded truck takes longer to stop than an empty one
- It's easier to push an empty shopping cart than a full one

**Inertial Reference Frames:**
Newton's laws only work in "inertial" reference frames - frames that aren't accelerating. The ground (approximately) is an inertial frame. An accelerating car is NOT.`,
                keyPoints: [
                    "Objects resist changes to their motion (inertia)",
                    "Mass measures inertia",
                    "Net force = 0 means constant velocity (or rest)"
                ]
            },
            {
                title: "Newton's Second Law",
                content: `**Statement:**
"The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."

**The Famous Equation:**
F = ma

or more precisely: F̄ = m·ā

Where:
- F̄ = Net force (vector, in Newtons)
- m = Mass (scalar, in kg)
- ā = Acceleration (vector, in m/s²)

**Key Insights:**
1. Force and acceleration are in the SAME direction
2. Double the force → double the acceleration
3. Double the mass → half the acceleration
4. No net force → no acceleration (connects to 1st law!)

**Unit of Force:**
1 Newton = force needed to accelerate 1 kg at 1 m/s²
1 N = 1 kg·m/s²

**Example:**
A 2 kg block is pushed with 10 N force on a frictionless surface. Find acceleration.

*Solution:*
F = ma
10 = 2 × a
a = 5 m/s²

**Important Note:**
When multiple forces act, use the NET force:
F_net = F₁ + F₂ + F₃ + ... (vector sum)`,
                keyPoints: [
                    "F = ma is the most important equation in mechanics",
                    "Force and acceleration have same direction",
                    "More mass means more force needed for same acceleration"
                ],
                formulas: [
                    { name: "Newton's Second Law", formula: "F = ma", unit: "N = kg·m/s²" }
                ]
            },
            {
                title: "Newton's Third Law",
                content: `**Statement:**
"For every action, there is an equal and opposite reaction."

**In Detail:**
When object A exerts a force on object B, object B exerts an equal but opposite force on object A.

F_AB = -F_BA

**Key Points:**
1. Action and reaction act on DIFFERENT objects
2. They occur SIMULTANEOUSLY
3. They are EQUAL in magnitude, OPPOSITE in direction
4. They do NOT cancel because they act on different objects!

**Examples:**
1. **Walking**: You push the ground backward, ground pushes you forward
2. **Swimming**: You push water backward, water pushes you forward
3. **Rocket**: Hot gas pushed out backward, gas pushes rocket forward
4. **Book on table**: Book pushes table down (weight), table pushes book up (normal force)

**Common Misconception:**
Why doesn't a horse and cart system stay still if forces are equal and opposite?

Answer: The forces act on different objects! The reaction to the horse pulling the cart is the cart pulling the horse. The horse moves forward because the ground pushes the horse forward (reaction to horse pushing ground).`,
                keyPoints: [
                    "Forces always come in pairs",
                    "Action-reaction pairs act on different objects",
                    "They don't cancel because they're on different objects"
                ]
            },
            {
                title: "Free Body Diagrams",
                content: `A Free Body Diagram (FBD) shows all forces acting ON a single object. This is the most important tool for solving mechanics problems!

**How to Draw an FBD:**
1. Isolate the object of interest
2. Draw it as a simple shape (dot or box)
3. Draw ALL forces acting ON it (not forces it exerts)
4. Label each force with its magnitude and direction

**Common Forces:**

**Weight (W or mg):**
- Direction: Always downward
- Magnitude: W = mg

**Normal Force (N):**
- Direction: Perpendicular to surface, away from surface
- Magnitude: Found from equilibrium conditions

**Friction (f):**
- Direction: Parallel to surface, opposing motion/tendency
- Static: f_s ≤ μ_s N (maximum value = μ_s N)
- Kinetic: f_k = μ_k N

**Tension (T):**
- Direction: Along the string, away from object
- Same throughout a massless string

**Example FBD:**
Block on a ramp:
- Weight (mg) straight down
- Normal force (N) perpendicular to ramp surface
- Friction (f) along ramp, pointing up the ramp

Decompose weight:
- Along ramp: mg sin θ
- Perpendicular to ramp: mg cos θ`,
                keyPoints: [
                    "FBD shows all forces on one object only",
                    "Normal force is perpendicular to surface",
                    "Friction opposes relative motion",
                    "Always decompose forces along convenient axes"
                ]
            },
            {
                title: "Friction",
                content: `Friction is the force that opposes relative motion between surfaces in contact.

**Types of Friction:**

**1. Static Friction (f_s):**
- Acts when object is NOT sliding
- Can vary from 0 to a maximum value
- Maximum static friction: f_s(max) = μ_s N
- Object starts moving when applied force exceeds f_s(max)

**2. Kinetic (Sliding) Friction (f_k):**
- Acts when object IS sliding
- Constant for given surfaces: f_k = μ_k N
- Always less than maximum static friction: μ_k < μ_s

**Coefficients of Friction:**
- μ_s = coefficient of static friction
- μ_k = coefficient of kinetic friction
- Both are dimensionless (no units)
- Depend on surface materials

**Typical Values:**
| Surfaces | μ_s | μ_k |
|----------|-----|-----|
| Rubber on concrete | 1.0 | 0.8 |
| Wood on wood | 0.5 | 0.3 |
| Steel on steel | 0.6 | 0.4 |
| Ice on ice | 0.1 | 0.03 |

**Friction on an Incline:**
For a block on a ramp at angle θ:
- Gravitational component along ramp: mg sin θ
- Normal force: N = mg cos θ
- Maximum static friction: f_s = μ_s mg cos θ

Block slides when: mg sin θ > μ_s mg cos θ
i.e., when tan θ > μ_s`,
                keyPoints: [
                    "Static friction prevents sliding (adjustable up to max)",
                    "Kinetic friction opposes sliding (constant)",
                    "f = μN for both types",
                    "μ_s > μ_k always"
                ],
                formulas: [
                    { name: "Static Friction (max)", formula: "f_s = μ_s N" },
                    { name: "Kinetic Friction", formula: "f_k = μ_k N" }
                ]
            },
            {
                title: "Circular Motion and Centripetal Force",
                content: `An object moving in a circle is constantly changing direction, so it's constantly accelerating - even if its speed is constant!

**Centripetal Acceleration:**
a_c = v²/r = ω²r

Direction: Toward the center of the circle

**Centripetal Force:**
F_c = ma_c = mv²/r = mω²r

Direction: Toward the center (same as acceleration)

**"Centripetal" means "center-seeking"**

**Important:**
Centripetal force is NOT a new type of force! It's the NET force directed toward the center. This net force is PROVIDED by:
- Tension (ball on string)
- Friction (car turning on road)
- Gravity (planets orbiting sun)
- Normal force (loop-the-loop)

**Examples:**

1. **Ball on string (horizontal circle):**
   Tension provides centripetal force
   T = mv²/r

2. **Car on flat road:**
   Friction provides centripetal force
   f = mv²/r
   Maximum speed: v_max = √(μgr)

3. **Car on banked road:**
   Component of normal force + friction provide centripetal force
   No friction needed if: tan θ = v²/rg

**Centrifugal "Force":**
In the rotating frame, objects appear to experience an outward force. This is NOT a real force - it's a pseudo-force due to the non-inertial reference frame.`,
                keyPoints: [
                    "Circular motion needs centripetal acceleration toward center",
                    "Centripetal force = mv²/r, always toward center",
                    "Something real must provide the centripetal force",
                    "Centrifugal force is not real (pseudo-force)"
                ],
                formulas: [
                    { name: "Centripetal Acceleration", formula: "a_c = v²/r = ω²r" },
                    { name: "Centripetal Force", formula: "F_c = mv²/r = mω²r" }
                ]
            }
        ],
        summary: `Newton's three laws form the foundation of classical mechanics. The first law defines inertia, the second connects force and acceleration (F = ma), and the third describes action-reaction pairs. Combined with concepts of friction and circular motion, you can analyze almost any mechanical system!`,
        practiceQuestions: [
            {
                question: "A 5 kg block is pushed with 30 N on a surface with μ_k = 0.2. Find acceleration. (g = 10 m/s²)",
                hint: "Net force = Applied force - friction. Friction = μ_k × N = μ_k × mg",
                answer: "Friction = 0.2 × 50 = 10 N. Net force = 30 - 10 = 20 N. a = 20/5 = 4 m/s²"
            },
            {
                question: "A car takes a turn of radius 50m at 20 m/s. What friction coefficient is needed?",
                hint: "Friction provides centripetal force: f = mv²/r, and f = μmg",
                answer: "μmg = mv²/r, so μ = v²/rg = 400/(50×10) = 0.8"
            },
            {
                question: "Why does a cyclist lean inward while turning?",
                hint: "Think about the forces and torques involved.",
                answer: "Leaning creates a component of gravity that provides centripetal force and prevents toppling due to friction's torque."
            }
        ]
    },

    "Work, Energy and Power": {
        introduction: `Energy is one of the most fundamental concepts in physics. Work is the transfer of energy, and power measures how fast energy is transferred. Understanding energy helps solve problems that are difficult with force analysis alone.`,
        sections: [
            {
                title: "Work Done by a Force",
                content: `**Definition:**
Work is done when a force causes displacement.

W = F · d = Fd cos θ

Where:
- F = magnitude of force
- d = magnitude of displacement
- θ = angle between force and displacement

**Key Points:**
1. Work is a SCALAR (has magnitude, no direction)
2. Unit: Joule (J) = Newton × meter
3. Work can be positive, negative, or zero

**When is Work:**
- **Positive**: Force and displacement in same direction (0° ≤ θ < 90°)
- **Negative**: Force and displacement in opposite directions (90° < θ ≤ 180°)
- **Zero**: Force perpendicular to displacement (θ = 90°), or no displacement

**Examples:**
1. **Carrying a bag while walking**: Normal force is upward, displacement is horizontal. θ = 90°, so W = 0! (You do work lifting it, not carrying it horizontally)

2. **Friction on sliding block**: Friction opposes motion, so θ = 180°, W = -Fd

3. **Gravity on falling object**: Both force and displacement downward, θ = 0°, W = mgh (positive)

**Work Done by Variable Force:**
When force varies with position:
W = ∫F · dx

This equals the area under the F-x graph.`,
                keyPoints: [
                    "W = Fd cos θ (force × displacement × cos of angle between them)",
                    "Work is a scalar, can be positive, negative, or zero",
                    "For variable force, work = area under F-x curve"
                ],
                formulas: [
                    { name: "Work (constant force)", formula: "W = Fd cos θ", unit: "Joule (J)" },
                    { name: "Work (variable force)", formula: "W = ∫F · dx" }
                ]
            },
            {
                title: "Kinetic Energy",
                content: `**Definition:**
Kinetic energy is the energy of motion.

KE = ½mv²

Where:
- m = mass (kg)
- v = speed (m/s)

**Properties:**
1. Always positive or zero (never negative)
2. Depends on speed squared (double speed → 4× energy!)
3. Unit: Joule (J)

**Work-Energy Theorem:**
The net work done on an object equals its change in kinetic energy:

W_net = ΔKE = KE_f - KE_i = ½mv_f² - ½mv_i²

This is incredibly useful! Instead of analyzing forces in detail, we can just look at initial and final velocities.

**Example:**
A 2 kg ball is thrown with speed 10 m/s. What is its kinetic energy?

KE = ½mv² = ½(2)(10)² = ½(2)(100) = 100 J

**Derivation of Work-Energy Theorem:**
Starting from F = ma and v² = u² + 2as:
- F = ma → Fs = mas
- Using v² = u² + 2as → as = (v² - u²)/2
- So Fs = m(v² - u²)/2 = ½mv² - ½mu²
- Therefore W = ΔKE ✓`,
                keyPoints: [
                    "KE = ½mv² (energy of motion)",
                    "Work-Energy Theorem: W_net = ΔKE",
                    "Kinetic energy depends on velocity squared"
                ],
                formulas: [
                    { name: "Kinetic Energy", formula: "KE = ½mv²" },
                    { name: "Work-Energy Theorem", formula: "W_net = ½mv_f² - ½mv_i²" }
                ]
            },
            {
                title: "Potential Energy",
                content: `**Definition:**
Potential energy is stored energy due to position or configuration.

**Gravitational Potential Energy:**
PE = mgh

Where:
- m = mass
- g = acceleration due to gravity
- h = height above reference point

Note: We choose a reference point where PE = 0. Only CHANGES in PE matter physically!

**Elastic (Spring) Potential Energy:**
When a spring is stretched or compressed by distance x from equilibrium:

PE = ½kx²

Where:
- k = spring constant (stiffness, in N/m)
- x = displacement from natural length

**Spring Force:**
F = -kx (Hooke's Law)

Negative sign indicates restoring force (toward equilibrium).

**Example:**
A 2 kg object is lifted 5 m. What is the change in gravitational PE? (g = 10 m/s²)

ΔPE = mgh = (2)(10)(5) = 100 J

**Example:**
A spring (k = 200 N/m) is compressed 0.1 m. What is the PE stored?

PE = ½kx² = ½(200)(0.1)² = ½(200)(0.01) = 1 J`,
                keyPoints: [
                    "Gravitational PE = mgh",
                    "Spring PE = ½kx²",
                    "Only changes in PE are physically meaningful",
                    "PE is stored energy that can be converted to KE"
                ],
                formulas: [
                    { name: "Gravitational PE", formula: "PE = mgh" },
                    { name: "Elastic PE", formula: "PE = ½kx²" },
                    { name: "Spring Force", formula: "F = -kx" }
                ]
            },
            {
                title: "Conservation of Energy",
                content: `**The Principle:**
Energy cannot be created or destroyed, only transformed from one form to another.

**For Mechanical Systems (Conservative Forces):**
Total mechanical energy = KE + PE = constant

KE_i + PE_i = KE_f + PE_f

**Conservative vs Non-Conservative Forces:**
- **Conservative**: Work done is path-independent (gravity, spring force)
- **Non-Conservative**: Work done depends on path (friction, air resistance)

**With Non-Conservative Forces:**
KE_i + PE_i + W_nc = KE_f + PE_f

Where W_nc is work done by non-conservative forces (usually negative for friction).

**Problem-Solving with Energy:**
1. Define the system and reference point for PE
2. Identify initial and final states
3. List all forms of energy in each state
4. Apply conservation of energy
5. Solve for unknown

**Example: Roller Coaster**
A 500 kg cart starts at height 20 m. Find its speed at height 5 m. (Ignore friction)

Solution:
- E_i = mgh_i + 0 = (500)(10)(20) = 100,000 J
- E_f = mgh_f + ½mv_f² = (500)(10)(5) + ½(500)v_f²
- 100,000 = 25,000 + 250v_f²
- 75,000 = 250v_f²
- v_f² = 300
- v_f = √300 ≈ 17.3 m/s`,
                keyPoints: [
                    "Energy is conserved in isolated systems",
                    "KE + PE = constant (no non-conservative forces)",
                    "Energy methods often simpler than force methods",
                    "Friction removes mechanical energy (heat)"
                ]
            },
            {
                title: "Power",
                content: `**Definition:**
Power is the rate at which work is done or energy is transferred.

P = W/t = ΔE/t

**Instantaneous Power:**
P = dW/dt = F · v = Fv cos θ

**Units:**
- SI unit: Watt (W) = J/s
- 1 horsepower (hp) = 746 W
- 1 kW = 1000 W

**Practical Applications:**

**Vehicles:**
For a car moving at constant velocity, power needed = Force × velocity
P = Fv

At constant velocity, driving force = friction + air resistance
Higher speed needs more power (air resistance ∝ v²)

**Lifting:**
Power to lift mass m at constant velocity v:
P = mgv

**Electrical:**
Power = Voltage × Current
P = VI

**Example:**
A 60 kg person climbs 10 m in 20 s. Calculate the power. (g = 10 m/s²)

Work done = mgh = 60 × 10 × 10 = 6000 J
Power = W/t = 6000/20 = 300 W

**Why Cars Have Gears:**
At low speed, wheels need high force (torque) for acceleration.
At high speed, wheels need high rotation rate.
Engine has a limited power = force × velocity.
Gears allow optimal force-velocity combination at all speeds.`,
                keyPoints: [
                    "Power = Work/Time = Energy/Time",
                    "P = Fv for constant velocity",
                    "1 Watt = 1 Joule per second",
                    "Higher speed usually requires more power"
                ],
                formulas: [
                    { name: "Average Power", formula: "P = W/t", unit: "Watt (W)" },
                    { name: "Instantaneous Power", formula: "P = Fv" },
                    { name: "Electrical Power", formula: "P = VI" }
                ]
            },
            {
                title: "Collisions",
                content: `Collisions are brief interactions where momentum is always conserved.

**Types of Collisions:**

**1. Elastic Collision:**
- Both momentum AND kinetic energy conserved
- Objects bounce off each other
- Examples: Billiard balls (approximately), atomic collisions

**2. Inelastic Collision:**
- Only momentum conserved
- Kinetic energy is NOT conserved (some becomes heat, sound, deformation)
- Most real collisions are inelastic

**3. Perfectly Inelastic Collision:**
- Objects stick together after collision
- Maximum kinetic energy loss
- Examples: Car crash where vehicles lock together, catching a ball

**Elastic Collision Formulas (1D):**
After collision between m₁ moving at u₁ hitting stationary m₂:

v₁ = (m₁ - m₂)u₁ / (m₁ + m₂)
v₂ = 2m₁u₁ / (m₁ + m₂)

**Special Cases:**
1. Equal masses (m₁ = m₂): v₁ = 0, v₂ = u₁ (velocities exchange!)
2. Heavy hitting light (m₁ >> m₂): v₁ ≈ u₁, v₂ ≈ 2u₁
3. Light hitting heavy (m₁ << m₂): v₁ ≈ -u₁, v₂ ≈ 0 (bounces back)

**Coefficient of Restitution (e):**
e = (v₂ - v₁)/(u₁ - u₂) = relative velocity of separation / relative velocity of approach

- e = 1: Perfectly elastic
- e = 0: Perfectly inelastic
- 0 < e < 1: Partially inelastic (most real cases)`,
                keyPoints: [
                    "Momentum always conserved in collisions",
                    "Elastic: KE conserved; Inelastic: KE not conserved",
                    "Perfectly inelastic: objects stick together",
                    "Equal mass elastic: velocities exchange"
                ]
            }
        ],
        summary: `Energy is a unifying concept across all of physics. Work transfers energy, kinetic energy is energy of motion, and potential energy is stored energy. Conservation of energy is one of the most powerful problem-solving tools. Power measures how fast energy is transferred.`,
        practiceQuestions: [
            {
                question: "A 10 kg box is pushed 5 m with 100 N force at 60° to horizontal. Find work done.",
                hint: "W = Fd cos θ",
                answer: "W = 100 × 5 × cos 60° = 500 × 0.5 = 250 J"
            },
            {
                question: "A ball is dropped from 20 m. Find its speed just before hitting ground. (g = 10 m/s²)",
                hint: "Use conservation of energy: PE_i = KE_f",
                answer: "mgh = ½mv², v = √(2gh) = √(2×10×20) = √400 = 20 m/s"
            },
            {
                question: "A 1000 kg car accelerates from rest to 20 m/s in 10 s. What is average power?",
                hint: "Find KE gained, then power = energy/time",
                answer: "KE = ½(1000)(20)² = 200,000 J. Power = 200,000/10 = 20,000 W = 20 kW"
            }
        ]
    },
    "Rotational Motion": {
        introduction: `Rotational motion extends the concepts of linear motion to rotating objects. Just as we have velocity and acceleration for linear motion, we have angular velocity and angular acceleration for rotation.`,
        sections: [
            {
                title: "Angular Quantities",
                content: `**Angular Displacement (θ):**
The angle through which an object rotates, measured in radians.

1 revolution = 2π radians = 360°

**Angular Velocity (ω):**
The rate of change of angular displacement.

ω = dθ/dt

Units: rad/s

**Angular Acceleration (α):**
The rate of change of angular velocity.

α = dω/dt

Units: rad/s²

**Relation to Linear Quantities:**
For a point at distance r from the rotation axis:
- Arc length: s = rθ
- Linear velocity: v = rω
- Linear acceleration: a = rα (tangential)
- Centripetal acceleration: a_c = v²/r = ω²r

**Equations of Rotational Motion:**
Analogous to linear equations:
- ω = ω₀ + αt
- θ = ω₀t + ½αt²
- ω² = ω₀² + 2αθ`,
                keyPoints: [
                    "Angular quantities parallel linear quantities",
                    "v = rω (tangential speed)",
                    "Same kinematic equations with angular variables"
                ],
                formulas: [
                    { name: "Arc Length", formula: "s = rθ" },
                    { name: "Linear-Angular Velocity", formula: "v = rω" },
                    { name: "Centripetal Acceleration", formula: "a_c = ω²r" }
                ]
            },
            {
                title: "Moment of Inertia",
                content: `**Definition:**
Moment of inertia (I) is the rotational analog of mass. It measures how difficult it is to change an object's rotational motion.

I = Σ mᵢrᵢ²

For continuous bodies: I = ∫ r² dm

**Physical Meaning:**
Just as a heavier object is harder to accelerate linearly, an object with larger moment of inertia is harder to rotate.

**Key Insight:**
Moment of inertia depends on:
1. Mass of the object
2. Distribution of mass relative to rotation axis

Mass far from axis → larger I → harder to rotate

**Common Moments of Inertia:**

| Object | Axis | Moment of Inertia |
|--------|------|-------------------|
| Point mass | At distance r | I = mr² |
| Ring (hoop) | Through center | I = MR² |
| Disk | Through center | I = ½MR² |
| Solid sphere | Through center | I = ⅖MR² |
| Hollow sphere | Through center | I = ⅔MR² |
| Rod (about center) | Perpendicular | I = (1/12)ML² |
| Rod (about end) | Perpendicular | I = ⅓ML² |

**Why does a ring have larger I than a disk of same mass and radius?**
In a ring, ALL mass is at distance R from the axis. In a disk, some mass is closer to the axis. So the ring has more "rotational inertia."`,
                keyPoints: [
                    "Moment of inertia is the rotational analog of mass",
                    "I depends on mass distribution, not just total mass",
                    "Mass farther from axis means larger I"
                ],
                formulas: [
                    { name: "Point Mass", formula: "I = mr²" },
                    { name: "Disk", formula: "I = ½MR²" },
                    { name: "Solid Sphere", formula: "I = ⅖MR²" }
                ]
            },
            {
                title: "Torque",
                content: `**Definition:**
Torque (τ) is the rotational analog of force. It causes angular acceleration.

τ = r × F = rF sin θ

Where:
- r = distance from rotation axis to force application point
- F = applied force
- θ = angle between r and F

**Direction:**
Torque is a vector. Use the right-hand rule:
- Curl fingers in direction of rotation
- Thumb points in direction of torque

**Newton's Second Law for Rotation:**
τ_net = Iα

This is the fundamental equation of rotational dynamics!

**Equilibrium Conditions:**
For complete equilibrium:
1. ΣF = 0 (translational equilibrium)
2. Στ = 0 (rotational equilibrium)

**Example: Opening a Door**
- Force applied near the hinge: small r → small τ → hard to open
- Force applied at the handle: large r → large τ → easy to open

That's why door handles are placed far from hinges!`,
                keyPoints: [
                    "Torque = Force × Perpendicular distance from axis",
                    "τ = Iα (Newton's second law for rotation)",
                    "More torque = more angular acceleration"
                ],
                formulas: [
                    { name: "Torque", formula: "τ = rF sin θ", unit: "N·m" },
                    { name: "Rotational Newton's 2nd Law", formula: "τ = Iα" }
                ]
            },
            {
                title: "Angular Momentum",
                content: `**Definition:**
Angular momentum (L) is the rotational analog of linear momentum.

L = Iω (for fixed axis)
L = r × p = r × mv (for a particle)

**Conservation of Angular Momentum:**
If net external torque is zero:

L = Iω = constant

**Applications:**

1. **Figure Skater's Spin:**
   When a skater pulls arms in:
   - I decreases (mass closer to axis)
   - ω increases (to keep Iω constant)
   - Result: Faster spin!

2. **Diving:**
   Divers curl into a ball to spin faster, extend to slow down for entry.

3. **Planets:**
   A planet moves faster when closer to the sun (smaller r) to conserve angular momentum.

**Example:**
A skater spins at 2 rev/s with arms extended (I = 3 kg·m²). She pulls arms in (I = 1 kg·m²). Find new spin rate.

Solution:
L_initial = L_final
I₁ω₁ = I₂ω₂
3 × 2 = 1 × ω₂
ω₂ = 6 rev/s (3 times faster!)`,
                keyPoints: [
                    "L = Iω (angular momentum)",
                    "Angular momentum is conserved when τ_net = 0",
                    "Classic example: figure skater spinning"
                ],
                formulas: [
                    { name: "Angular Momentum", formula: "L = Iω" },
                    { name: "Conservation", formula: "I₁ω₁ = I₂ω₂" }
                ]
            },
            {
                title: "Rotational Kinetic Energy",
                content: `**Definition:**
A rotating object has kinetic energy due to its rotation.

KE_rot = ½Iω²

Compare with linear: KE_trans = ½mv²

**Total Kinetic Energy:**
For an object that's both translating and rotating:

KE_total = KE_trans + KE_rot = ½mv² + ½Iω²

**Rolling Without Slipping:**
When an object rolls without slipping, the contact point has zero velocity relative to the surface.

Condition: v = Rω

For rolling down an incline:
mgh = ½mv² + ½Iω²

Using v = Rω:
mgh = ½mv² + ½I(v/R)²
mgh = ½v²(m + I/R²)

This is why hollow objects roll slower than solid ones of the same radius!

**Example:**
A solid disk and a ring (same mass and radius) roll down from 10m height. Which reaches bottom first?

Answer: The disk! 
- Disk: I = ½mR² → less energy in rotation → more in translation
- Ring: I = mR² → more energy in rotation → less in translation

The disk has higher translational velocity.`,
                keyPoints: [
                    "Rotational KE = ½Iω²",
                    "Rolling objects have both translational and rotational KE",
                    "Solid objects roll faster than hollow ones"
                ],
                formulas: [
                    { name: "Rotational KE", formula: "KE_rot = ½Iω²" },
                    { name: "Rolling KE", formula: "KE = ½mv² + ½Iω²" },
                    { name: "Rolling Condition", formula: "v = Rω" }
                ]
            }
        ],
        summary: `Rotational motion introduces angular quantities (θ, ω, α) that parallel linear quantities. Moment of inertia plays the role of mass, torque plays the role of force, and angular momentum is conserved when no external torque acts.`,
        practiceQuestions: [
            {
                question: "A wheel rotates at 10 rad/s. It decelerates at 2 rad/s². How many rotations before stopping?",
                hint: "Use ω² = ω₀² + 2αθ, then convert θ from radians to rotations.",
                answer: "0 = 100 - 4θ, θ = 25 rad = 25/(2π) ≈ 4 rotations"
            },
            {
                question: "A disk and ring of same mass roll down a slope. Which has greater speed at bottom?",
                hint: "Think about how moment of inertia affects energy distribution.",
                answer: "The disk - it has smaller moment of inertia, so more energy goes to translational motion."
            },
            {
                question: "Calculate the moment of inertia of a 2 kg solid sphere with radius 0.1 m.",
                hint: "For solid sphere, I = ⅖MR²",
                answer: "I = (2/5)(2)(0.1)² = 0.4 × 0.01 = 0.008 kg·m²"
            }
        ]
    },

    // =====================
    // CHEMISTRY
    // =====================

    "Some Basic Concepts": {
        introduction: `Chemistry is the branch of science that deals with the composition, structure, properties, and changes of matter. This chapter covers the foundational concepts that you'll use throughout your chemistry journey.`,
        sections: [
            {
                title: "Matter and Its Classification",
                content: `**What is Matter?**
Anything that has mass and occupies space is called matter. Everything around us - air, water, rocks, your body - is made of matter.

**Classification of Matter:**

**By Physical State:**
- **Solid**: Fixed shape and volume (ice, iron)
- **Liquid**: Fixed volume, takes container's shape (water, oil)
- **Gas**: Neither fixed shape nor volume (air, steam)

**By Chemical Composition:**
- **Pure Substances**: Elements and Compounds
- **Mixtures**: Homogeneous and Heterogeneous

**Elements** are substances that cannot be broken down into simpler substances by chemical means. Examples: Hydrogen (H), Oxygen (O), Gold (Au)

**Compounds** are pure substances formed by chemical combination of two or more elements in fixed proportions. Example: Water (H₂O) - always 2:1 ratio of H:O by atoms.`,
                keyPoints: [
                    "Matter has mass and occupies space",
                    "Elements cannot be broken down further",
                    "Compounds have fixed composition by mass"
                ]
            },
            {
                title: "The Mole Concept",
                content: `**Avogadro's Number:**
One mole of any substance contains exactly **6.022 × 10²³** particles.

This number is called Avogadro's constant (Nₐ).

**Why the Mole?**
Atoms are incredibly small - we can't count them one by one. The mole bridges the gap between atoms and grams!

**Key Relationships:**

| Concept | Formula |
|---------|---------|
| Number of moles | n = Given mass / Molar mass |
| Number of particles | N = n × Nₐ |
| At STP (gases) | 1 mole = 22.4 L |

**Molar Mass:**
The mass of one mole of a substance in grams.
- H₂O: 2(1) + 16 = 18 g/mol
- CO₂: 12 + 2(16) = 44 g/mol
- NaCl: 23 + 35.5 = 58.5 g/mol

**Example:**
How many molecules are in 9 grams of water?
- Molar mass of H₂O = 18 g/mol
- Moles = 9/18 = 0.5 mol
- Molecules = 0.5 × 6.022 × 10²³ = 3.011 × 10²³ molecules`,
                keyPoints: [
                    "1 mole = 6.022 × 10²³ particles",
                    "Molar mass = mass of 1 mole in grams",
                    "n = mass/molar mass"
                ],
                formulas: [
                    { name: "Number of moles", formula: "n = m/M" },
                    { name: "Number of particles", formula: "N = n × Nₐ" },
                    { name: "Avogadro's Number", formula: "Nₐ = 6.022 × 10²³" }
                ]
            },
            {
                title: "Stoichiometry",
                content: `**Balanced Chemical Equations:**
A balanced equation has equal numbers of each type of atom on both sides.

Example: Combustion of propane
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O

This tells us:
- 1 molecule C₃H₈ reacts with 5 molecules O₂
- Produces 3 molecules CO₂ and 4 molecules H₂O
- Works for moles too!

**Mole Ratios:**
From the balanced equation, we get mole ratios for calculations.

**Limiting Reagent:**
The reactant that gets used up first, limiting the amount of product formed.

**Example Problem:**
If 2 mol H₂ reacts with 1 mol O₂, how much H₂O forms?
Reaction: 2H₂ + O₂ → 2H₂O

Step 1: Check the mole ratio needed (2:1)
Step 2: We have exactly 2:1, so no limiting reagent
Step 3: From equation, 2 mol H₂ → 2 mol H₂O

Answer: 2 mol H₂O

**Percentage Yield:**
Actual yield is often less than theoretical yield.
% Yield = (Actual yield / Theoretical yield) × 100`,
                keyPoints: [
                    "Balance equations for atom conservation",
                    "Use mole ratios for calculations",
                    "Limiting reagent determines max product"
                ],
                formulas: [
                    { name: "Percentage Yield", formula: "% Yield = (Actual/Theoretical) × 100" }
                ]
            }
        ],
        summary: `This chapter establishes the quantitative foundation of chemistry. The mole concept connects the microscopic world of atoms to the macroscopic world of grams we can measure in the lab.`,
        practiceQuestions: [
            {
                question: "How many moles are in 88 g of CO₂?",
                hint: "First find molar mass of CO₂, then use n = m/M",
                answer: "Molar mass = 12 + 2(16) = 44 g/mol. Moles = 88/44 = 2 mol"
            },
            {
                question: "What mass of O₂ is needed to completely react with 4 g of H₂?",
                hint: "Write balanced equation: 2H₂ + O₂ → 2H₂O",
                answer: "4 g H₂ = 2 mol H₂. From equation, needs 1 mol O₂ = 32 g O₂"
            }
        ]
    },

    "Atomic Structure": {
        introduction: `The atom, once thought to be indivisible, is actually made of subatomic particles. Understanding atomic structure is crucial for understanding chemical bonding and properties.`,
        sections: [
            {
                title: "Discovery of Subatomic Particles",
                content: `**Electron (e⁻)**
- Discovered by J.J. Thomson (1897) using cathode ray experiments
- Mass: 9.109 × 10⁻³¹ kg
- Charge: -1.6 × 10⁻¹⁹ C (or -1 unit)

**Proton (p⁺)**
- Discovered by Goldstein (canal rays) and Rutherford
- Mass: 1.673 × 10⁻²⁷ kg (≈ 1 amu)
- Charge: +1.6 × 10⁻¹⁹ C (or +1 unit)

**Neutron (n⁰)**
- Discovered by James Chadwick (1932)
- Mass: 1.675 × 10⁻²⁷ kg (≈ 1 amu)
- Charge: 0 (neutral)

**Key Insight:**
Proton mass ≈ Neutron mass ≈ 1836 × Electron mass
Almost all atomic mass is in the nucleus!`,
                keyPoints: [
                    "Electrons are much lighter than protons/neutrons",
                    "Protons and neutrons are in the nucleus",
                    "Electrons orbit the nucleus"
                ]
            },
            {
                title: "Bohr's Model",
                content: `**Bohr's Postulates (1913):**

1. Electrons move in fixed circular orbits (shells) around the nucleus
2. Each orbit has a fixed energy - no energy change while in orbit
3. Energy is absorbed/emitted only when electrons jump between orbits
4. Angular momentum is quantized: L = nh/2π

**Energy Levels:**
E_n = -13.6/n² eV (for hydrogen)

As n increases, energy becomes less negative (higher energy).

**Orbit Radius:**
r_n = 0.529 × n² Å (for hydrogen)

**Limitations of Bohr Model:**
- Only works for single-electron species (H, He⁺, Li²⁺)
- Cannot explain spectral line splitting
- Violates Heisenberg's uncertainty principle`,
                keyPoints: [
                    "Electrons exist in fixed energy levels",
                    "Energy absorbed/emitted during transitions",
                    "E = -13.6/n² eV for hydrogen"
                ],
                formulas: [
                    { name: "Energy (H atom)", formula: "Eₙ = -13.6/n² eV" },
                    { name: "Radius (H atom)", formula: "rₙ = 0.529 × n² Å" },
                    { name: "Angular Momentum", formula: "L = nh/2π" }
                ]
            },
            {
                title: "Quantum Numbers",
                content: `**Four Quantum Numbers** describe an electron's state:

**1. Principal Quantum Number (n)**
- Values: 1, 2, 3, 4, ...
- Represents shell/energy level
- Higher n = higher energy, larger orbital

**2. Azimuthal/Angular Momentum Quantum Number (l)**
- Values: 0 to (n-1)
- Determines orbital shape
- l = 0 (s), 1 (p), 2 (d), 3 (f)

**3. Magnetic Quantum Number (mₗ)**
- Values: -l to +l
- Determines orbital orientation in space
- Number of orbitals in a subshell = 2l + 1

**4. Spin Quantum Number (mₛ)**
- Values: +½ or -½
- Two electrons per orbital (Pauli Exclusion Principle)

**Example:**
For n = 3:
- l can be 0, 1, or 2 (s, p, d)
- For 3d (l=2): mₗ = -2, -1, 0, +1, +2 (5 orbitals)
- Maximum electrons in 3d = 5 × 2 = 10`,
                keyPoints: [
                    "n = shell, l = subshell, mₗ = orbital, mₛ = spin",
                    "Maximum electrons per subshell = 2(2l + 1)",
                    "Each orbital holds maximum 2 electrons"
                ]
            }
        ],
        summary: `Atomic structure evolved from Thomson's plum pudding to Bohr's orbits to the quantum mechanical model. Quantum numbers provide a complete description of electron states.`,
        practiceQuestions: [
            {
                question: "How many orbitals are in the n=4 shell?",
                hint: "Count all subshells: 4s, 4p, 4d, 4f",
                answer: "4s(1) + 4p(3) + 4d(5) + 4f(7) = 16 orbitals"
            },
            {
                question: "What is the energy of an electron in n=2 shell of hydrogen?",
                hint: "Use E = -13.6/n² eV",
                answer: "E = -13.6/4 = -3.4 eV"
            }
        ]
    },

    "Chemical Bonding": {
        introduction: `Atoms combine to form molecules through chemical bonds. Understanding bonding helps predict molecular shapes, properties, and reactivity.`,
        sections: [
            {
                title: "Types of Chemical Bonds",
                content: `**Why Do Atoms Bond?**
Atoms bond to achieve a stable, lower-energy configuration - usually a complete outer shell (octet rule).

**Ionic Bonds:**
- Formed by transfer of electrons
- Between metals and non-metals
- Strong electrostatic attraction between ions
- Example: NaCl - Na loses 1e⁻ to become Na⁺, Cl gains 1e⁻ to become Cl⁻

**Covalent Bonds:**
- Formed by sharing of electrons
- Between non-metals
- Can be single, double, or triple bonds
- Example: H₂ - each H shares 1 electron

**Metallic Bonds:**
- Between metal atoms
- "Sea of electrons" model
- Explains conductivity, malleability, luster`,
                keyPoints: [
                    "Ionic: electron transfer (metal + non-metal)",
                    "Covalent: electron sharing (non-metal + non-metal)",
                    "Metallic: electron sea between metal atoms"
                ]
            },
            {
                title: "VSEPR Theory",
                content: `**Valence Shell Electron Pair Repulsion Theory**

Electron pairs around a central atom repel each other and arrange to be as far apart as possible.

**Steps to Predict Shape:**
1. Count bonding pairs (BP) and lone pairs (LP)
2. Determine electron geometry
3. Determine molecular geometry (ignore lone pairs)

**Common Shapes:**

| BP | LP | Shape | Example |
|----|----|----|---------|
| 2 | 0 | Linear | CO₂, BeCl₂ |
| 3 | 0 | Trigonal planar | BF₃ |
| 3 | 1 | Bent | SO₂ |
| 4 | 0 | Tetrahedral | CH₄ |
| 4 | 1 | Trigonal pyramid | NH₃ |
| 4 | 2 | Bent | H₂O |

**Effect of Lone Pairs:**
Lone pairs repel more than bonding pairs, so they "squeeze" bonds closer together.
- CH₄: 109.5° (no LP)
- NH₃: 107° (1 LP)
- H₂O: 104.5° (2 LP)`,
                keyPoints: [
                    "Electron pairs repel and maximize distance",
                    "Lone pairs affect molecular shape",
                    "Lone pairs repel more than bonding pairs"
                ]
            },
            {
                title: "Hybridization",
                content: `**What is Hybridization?**
Mixing of atomic orbitals to form new hybrid orbitals for bonding.

**Types of Hybridization:**

**sp Hybridization:**
- Mixing: 1 s + 1 p = 2 sp orbitals
- Geometry: Linear (180°)
- Examples: BeCl₂, C₂H₂ (acetylene), CO₂

**sp² Hybridization:**
- Mixing: 1 s + 2 p = 3 sp² orbitals
- Geometry: Trigonal planar (120°)
- Examples: BF₃, C₂H₄ (ethene), graphite

**sp³ Hybridization:**
- Mixing: 1 s + 3 p = 4 sp³ orbitals
- Geometry: Tetrahedral (109.5°)
- Examples: CH₄, NH₃, H₂O, diamond

**sp³d and sp³d² Hybridization:**
- For expanded octets (>8 electrons)
- sp³d: Trigonal bipyramidal (PCl₅)
- sp³d²: Octahedral (SF₆)

**How to Determine Hybridization:**
Count steric number = Number of atoms bonded + lone pairs on central atom
- 2 → sp
- 3 → sp²
- 4 → sp³
- 5 → sp³d
- 6 → sp³d²`,
                keyPoints: [
                    "sp = linear, sp² = trigonal planar, sp³ = tetrahedral",
                    "Steric number determines hybridization",
                    "Each hybrid orbital can hold 2 electrons"
                ]
            }
        ],
        summary: `Chemical bonding involves electron arrangement to achieve stability. VSEPR predicts molecular shapes, while hybridization explains how atomic orbitals mix for bonding.`,
        practiceQuestions: [
            {
                question: "What is the shape and hybridization of H₂O?",
                hint: "Count bonding pairs and lone pairs on oxygen",
                answer: "2 BP + 2 LP = sp³ hybridization. Shape: Bent (104.5°)"
            },
            {
                question: "Why is NH₃ polar but BF₃ is non-polar?",
                hint: "Consider the symmetry of molecular shapes",
                answer: "BF₃ is trigonal planar (symmetric, dipoles cancel). NH₃ is trigonal pyramidal (asymmetric, net dipole exists)."
            }
        ]
    },

    // =====================
    // MATHEMATICS
    // =====================

    "Sets and Functions": {
        introduction: `Sets form the foundation of modern mathematics. A set is a well-defined collection of distinct objects. Function is a special relation that maps each element of one set to exactly one element of another set.`,
        sections: [
            {
                title: "Sets and Set Operations",
                content: `**What is a Set?**
A set is a well-defined collection of distinct objects, called elements or members.

**Notation:**
- Set: Capital letters (A, B, C)
- Elements: Lower case letters (a, b, c)
- Membership: a ∈ A (a belongs to A)

**Types of Sets:**
- **Empty Set (∅)**: Contains no elements
- **Finite Set**: Countable number of elements
- **Infinite Set**: Uncountable elements
- **Universal Set (U)**: Contains all elements under consideration

**Set Operations:**

| Operation | Symbol | Meaning |
|-----------|--------|---------|
| Union | A ∪ B | Elements in A or B or both |
| Intersection | A ∩ B | Elements in both A and B |
| Difference | A - B | Elements in A but not in B |
| Complement | A' or Aᶜ | Elements not in A |

**Laws:**
- Commutative: A ∪ B = B ∪ A
- Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)
- Distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
- De Morgan's: (A ∪ B)' = A' ∩ B'`,
                keyPoints: [
                    "Sets contain distinct elements",
                    "Union (∪) = OR, Intersection (∩) = AND",
                    "De Morgan's laws relate complements to unions/intersections"
                ]
            },
            {
                title: "Relations and Functions",
                content: `**Relation:**
A relation from set A to set B is a subset of A × B (Cartesian product).

**Function:**
A function f: A → B is a special relation where:
- Every element of A is related to some element of B
- Each element of A is related to exactly ONE element of B

**Terminology:**
- **Domain**: Set of all inputs (A)
- **Codomain**: Set of all possible outputs (B)
- **Range**: Set of actual outputs (subset of codomain)

**Types of Functions:**

**One-One (Injective):**
Different inputs give different outputs.
f(a) = f(b) ⟹ a = b

**Onto (Surjective):**
Every element in codomain has a preimage.
Range = Codomain

**Bijective:**
Both one-one and onto.
Necessary for inverse to exist!

**Example:**
f(x) = x² from ℝ to ℝ
- Not one-one: f(2) = f(-2) = 4
- Not onto: No input gives -1
- Not bijective`,
                keyPoints: [
                    "Functions map each input to exactly one output",
                    "Domain → (function) → Range",
                    "Bijection = one-one + onto"
                ]
            },
            {
                title: "Composition and Inverse",
                content: `**Composition of Functions:**
If f: A → B and g: B → C, then
(g ∘ f): A → C defined by (g ∘ f)(x) = g(f(x))

"First apply f, then apply g"

**Properties:**
- Not commutative: g ∘ f ≠ f ∘ g (generally)
- Associative: h ∘ (g ∘ f) = (h ∘ g) ∘ f

**Inverse Function:**
If f: A → B is bijective, then f⁻¹: B → A exists where:
f(f⁻¹(y)) = y and f⁻¹(f(x)) = x

**Finding Inverse:**
1. Write y = f(x)
2. Solve for x in terms of y
3. Replace x with f⁻¹(y), y with x

**Example:**
f(x) = 2x + 3
y = 2x + 3
2x = y - 3
x = (y - 3)/2
f⁻¹(x) = (x - 3)/2

**Graphical Note:**
The graph of f⁻¹ is the reflection of f about the line y = x.`,
                keyPoints: [
                    "(g ∘ f)(x) = g(f(x))",
                    "Only bijections have inverses",
                    "f and f⁻¹ are reflections about y = x"
                ],
                formulas: [
                    { name: "Composition", formula: "(g ∘ f)(x) = g(f(x))" },
                    { name: "Inverse condition", formula: "f(f⁻¹(x)) = x" }
                ]
            }
        ],
        summary: `Sets and functions form the language of mathematics. Understanding set operations, types of functions, and inverse functions is essential for all of higher mathematics.`,
        practiceQuestions: [
            {
                question: "If A = {1, 2, 3} and B = {2, 3, 4}, find A ∪ B and A ∩ B",
                hint: "Union = all elements, Intersection = common elements",
                answer: "A ∪ B = {1, 2, 3, 4}, A ∩ B = {2, 3}"
            },
            {
                question: "Find the inverse of f(x) = (x+1)/(x-1)",
                hint: "Solve y = (x+1)/(x-1) for x",
                answer: "y(x-1) = x+1 → xy - y = x + 1 → x(y-1) = y+1 → x = (y+1)/(y-1). So f⁻¹(x) = (x+1)/(x-1)"
            }
        ]
    },

    "Trigonometry": {
        introduction: `Trigonometry studies the relationships between angles and sides of triangles. It has applications in physics, engineering, astronomy, and computer graphics.`,
        sections: [
            {
                title: "Trigonometric Ratios",
                content: `**Basic Ratios in a Right Triangle:**

For an angle θ in a right triangle:

| Ratio | Definition | Reciprocal |
|-------|------------|------------|
| sin θ | Opposite/Hypotenuse | cosec θ = 1/sin θ |
| cos θ | Adjacent/Hypotenuse | sec θ = 1/cos θ |
| tan θ | Opposite/Adjacent | cot θ = 1/tan θ |

**Mnemonic:** SOH-CAH-TOA
- Sin = Opposite/Hypotenuse
- Cos = Adjacent/Hypotenuse
- Tan = Opposite/Adjacent

**Standard Angles:**

| θ | 0° | 30° | 45° | 60° | 90° |
|---|-----|-----|-----|-----|-----|
| sin θ | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan θ | 0 | 1/√3 | 1 | √3 | ∞ |

**Remember:** For sin, read 0,1,2,3,4 → take √(n)/2
For cos, it's reverse: 4,3,2,1,0`,
                keyPoints: [
                    "SOH-CAH-TOA for basic ratios",
                    "Memorize values for 0°, 30°, 45°, 60°, 90°",
                    "tan θ = sin θ / cos θ"
                ]
            },
            {
                title: "Trigonometric Identities",
                content: `**Pythagorean Identities:**
- sin²θ + cos²θ = 1
- 1 + tan²θ = sec²θ
- 1 + cot²θ = cosec²θ

**Compound Angle Formulas:**
- sin(A + B) = sin A cos B + cos A sin B
- sin(A - B) = sin A cos B - cos A sin B
- cos(A + B) = cos A cos B - sin A sin B
- cos(A - B) = cos A cos B + sin A sin B
- tan(A + B) = (tan A + tan B)/(1 - tan A tan B)

**Double Angle Formulas:**
- sin 2θ = 2 sin θ cos θ
- cos 2θ = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ
- tan 2θ = 2 tan θ/(1 - tan²θ)

**Half Angle Formulas:**
- sin²(θ/2) = (1 - cos θ)/2
- cos²(θ/2) = (1 + cos θ)/2

**Product to Sum:**
- 2 sin A cos B = sin(A+B) + sin(A-B)
- 2 cos A cos B = cos(A+B) + cos(A-B)
- 2 sin A sin B = cos(A-B) - cos(A+B)`,
                keyPoints: [
                    "sin²θ + cos²θ = 1 (most fundamental)",
                    "sin 2θ = 2 sin θ cos θ",
                    "cos 2θ has three equivalent forms"
                ],
                formulas: [
                    { name: "Pythagorean Identity", formula: "sin²θ + cos²θ = 1" },
                    { name: "Double Angle (sin)", formula: "sin 2θ = 2 sin θ cos θ" },
                    { name: "Double Angle (cos)", formula: "cos 2θ = cos²θ - sin²θ" }
                ]
            },
            {
                title: "Trigonometric Equations",
                content: `**General Solutions:**

**sin θ = sin α**
θ = nπ + (-1)ⁿα, where n ∈ ℤ

**cos θ = cos α**
θ = 2nπ ± α, where n ∈ ℤ

**tan θ = tan α**
θ = nπ + α, where n ∈ ℤ

**Example:**
Solve sin θ = 1/2

Step 1: Find principal value
sin θ = 1/2 → α = π/6 (or 30°)

Step 2: Write general solution
θ = nπ + (-1)ⁿ(π/6), n ∈ ℤ

For n = 0: θ = π/6
For n = 1: θ = π - π/6 = 5π/6
For n = 2: θ = 2π + π/6 = 13π/6

**Solving Quadratic Trig Equations:**
1. Substitute: Let sin θ = t
2. Solve the quadratic in t
3. Find θ for each solution of t`,
                keyPoints: [
                    "General solution covers all angles",
                    "Know patterns for sin, cos, tan equations",
                    "Check solutions in original equation"
                ]
            }
        ],
        summary: `Trigonometry connects angles to ratios. Master the identities and general solutions - they appear everywhere in physics and higher mathematics.`,
        practiceQuestions: [
            {
                question: "If sin θ = 3/5 and θ is in Q1, find cos θ and tan θ",
                hint: "Use sin²θ + cos²θ = 1",
                answer: "cos²θ = 1 - 9/25 = 16/25 → cos θ = 4/5. tan θ = sin θ/cos θ = 3/4"
            },
            {
                question: "Prove: (1 + tan²θ)cos²θ = 1",
                hint: "Use 1 + tan²θ = sec²θ",
                answer: "LHS = sec²θ × cos²θ = (1/cos²θ) × cos²θ = 1 = RHS"
            }
        ]
    },

    // =====================
    // BIOLOGY
    // =====================

    "Cell Biology": {
        introduction: `The cell is the fundamental unit of life. All living organisms are made of cells, and all cells come from pre-existing cells. Understanding cell structure and function is essential for biology.`,
        sections: [
            {
                title: "Cell Theory and Types of Cells",
                content: `**Cell Theory (Schleiden & Schwann, 1839):**
1. All living organisms are made of cells
2. The cell is the structural and functional unit of life
3. All cells arise from pre-existing cells (added by Virchow)

**Two Types of Cells:**

**Prokaryotic Cells:**
- No membrane-bound nucleus or organelles
- DNA is circular, in nucleoid region
- Smaller (1-10 μm)
- Examples: Bacteria, Archaea

**Eukaryotic Cells:**
- Membrane-bound nucleus and organelles
- DNA is linear, in chromosomes
- Larger (10-100 μm)
- Examples: Plants, Animals, Fungi, Protists

**Key Differences:**

| Feature | Prokaryotic | Eukaryotic |
|---------|-------------|------------|
| Nucleus | Absent | Present |
| Organelles | Few, no membrane | Many, membrane-bound |
| DNA | Circular | Linear |
| Ribosomes | 70S | 80S |
| Size | 1-10 μm | 10-100 μm |`,
                keyPoints: [
                    "All living things are made of cells",
                    "Prokaryotes lack nucleus; Eukaryotes have nucleus",
                    "Cells arise from pre-existing cells"
                ]
            },
            {
                title: "Cell Organelles",
                content: `**Nucleus - The Control Center:**
- Contains genetic material (DNA)
- Surrounded by nuclear envelope (double membrane)
- Nucleolus: Site of ribosome synthesis
- Chromatin: DNA + proteins (condenses into chromosomes)

**Mitochondria - The Powerhouse:**
- Site of cellular respiration
- Produces ATP (energy currency)
- Has own DNA and ribosomes
- Double membrane with cristae (inner folds)

**Endoplasmic Reticulum (ER):**
- **Rough ER**: Has ribosomes, synthesizes proteins
- **Smooth ER**: No ribosomes, synthesizes lipids

**Golgi Apparatus:**
- Packaging and shipping center
- Modifies, packages, and exports proteins
- Forms lysosomes

**Lysosomes:**
- "Suicide bags" - digest cellular waste
- Contain hydrolytic enzymes
- Important in autophagy

**Chloroplasts (Plant cells only):**
- Site of photosynthesis
- Contains chlorophyll (green pigment)
- Has own DNA and ribosomes
- Double membrane with thylakoids`,
                keyPoints: [
                    "Nucleus contains DNA and controls cell",
                    "Mitochondria produce ATP",
                    "Chloroplasts perform photosynthesis (plants)"
                ]
            },
            {
                title: "Cell Division",
                content: `**Cell Cycle:**
The life of a cell from one division to the next.

**Phases:**
1. **Interphase** (90% of cell cycle)
   - G1: Cell grows, proteins synthesized
   - S: DNA replication
   - G2: Preparation for mitosis

2. **M Phase** (Mitosis + Cytokinesis)

**Mitosis - Somatic Cell Division:**
Creates two identical daughter cells.

| Phase | Events |
|-------|--------|
| Prophase | Chromosomes condense, nucleolus disappears |
| Metaphase | Chromosomes align at cell equator |
| Anaphase | Sister chromatids separate to poles |
| Telophase | Nuclear envelope reforms, chromosomes decondense |

**Meiosis - Gamete Formation:**
- Produces 4 haploid cells from 1 diploid cell
- Two divisions: Meiosis I (reductional) and Meiosis II (equational)
- Introduces genetic variation through crossing over

**Significance:**
- Mitosis: Growth, repair, asexual reproduction
- Meiosis: Sexual reproduction, genetic diversity`,
                keyPoints: [
                    "Mitosis: 1 cell → 2 identical cells",
                    "Meiosis: 1 cell → 4 haploid cells",
                    "PMAT: Prophase, Metaphase, Anaphase, Telophase"
                ]
            }
        ],
        summary: `The cell is the basic unit of life. Prokaryotes and eukaryotes differ in complexity, with eukaryotes having membrane-bound organelles. Cell division (mitosis and meiosis) is essential for growth and reproduction.`,
        practiceQuestions: [
            {
                question: "Why are mitochondria called 'powerhouses' of the cell?",
                hint: "Think about what they produce",
                answer: "Mitochondria perform cellular respiration and produce ATP, the energy currency of the cell."
            },
            {
                question: "How does meiosis contribute to genetic diversity?",
                hint: "Consider crossing over and random assortment",
                answer: "Crossing over in prophase I exchanges genetic material between chromosomes. Independent assortment randomly distributes chromosomes to daughter cells."
            }
        ]
    },

    "Plant Physiology": {
        introduction: `Plant physiology studies how plants function - from absorbing water and nutrients to producing food through photosynthesis. Understanding these processes is crucial for agriculture and ecology.`,
        sections: [
            {
                title: "Photosynthesis",
                content: `**The Process:**
Plants convert light energy into chemical energy stored in glucose.

**Overall Equation:**
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

**Two Stages:**

**1. Light Reactions (in Thylakoids):**
- Light absorbed by chlorophyll
- Water split (photolysis): H₂O → 2H⁺ + ½O₂ + 2e⁻
- ATP and NADPH produced
- O₂ released as byproduct

**2. Dark Reactions / Calvin Cycle (in Stroma):**
- CO₂ fixed into organic compounds
- Uses ATP and NADPH from light reactions
- Produces G3P (glyceraldehyde-3-phosphate)
- G3P used to make glucose

**Factors Affecting Photosynthesis:**
- Light intensity (limiting at low levels)
- CO₂ concentration
- Temperature (optimum 25-35°C)
- Water availability

**C3 vs C4 Plants:**
- C3: First product is 3-carbon compound (most plants)
- C4: First product is 4-carbon compound (maize, sugarcane)
- C4 more efficient in hot, dry conditions`,
                keyPoints: [
                    "Photosynthesis: CO₂ + H₂O → Glucose + O₂",
                    "Light reactions in thylakoids produce ATP, NADPH",
                    "Calvin cycle in stroma fixes CO₂"
                ],
                formulas: [
                    { name: "Photosynthesis", formula: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂" }
                ]
            },
            {
                title: "Transport in Plants",
                content: `**Water Transport:**

**Pathway:** Soil → Root hair → Xylem → Leaves

**Mechanisms:**
1. **Root Pressure**: Pushes water up (minor role)
2. **Transpiration Pull**: Main mechanism
   - Water evaporates from leaves (transpiration)
   - Creates tension that pulls water up
   - Cohesion-tension theory

**Transpiration:**
- Loss of water as vapor through stomata
- Cools the plant
- Creates suction for water uptake

**Factors Affecting Transpiration:**
- Light (stomata open in light)
- Humidity (low humidity → more transpiration)
- Wind (increases transpiration)
- Temperature (higher → more transpiration)

**Sugar Transport (Translocation):**
- Occurs in phloem
- From source (leaves) to sink (roots, fruits)
- Mechanism: Pressure flow hypothesis
- Bidirectional (unlike xylem)`,
                keyPoints: [
                    "Xylem transports water upward only",
                    "Phloem transports sugars bidirectionally",
                    "Transpiration pull is the main force for water movement"
                ]
            },
            {
                title: "Plant Hormones",
                content: `**Auxins:**
- Promote cell elongation
- Apical dominance
- Phototropism and geotropism
- Example: IAA (Indole-3-acetic acid)

**Gibberellins:**
- Promote stem elongation
- Seed germination
- Break dormancy
- Used to produce seedless fruits

**Cytokinins:**
- Promote cell division
- Delay senescence (aging)
- Work with auxins for organ development

**Abscisic Acid (ABA):**
- Stress hormone
- Promotes dormancy
- Closes stomata during drought

**Ethylene:**
- Gaseous hormone
- Fruit ripening
- Leaf abscission (fall)
- "One bad apple spoils the bunch"

**Interactions:**
Hormones often work together or against each other:
- Auxin/Cytokinin ratio determines root vs shoot growth
- ABA and GA have opposite effects on dormancy`,
                keyPoints: [
                    "Auxin: growth, elongation",
                    "Gibberellin: stem elongation, germination",
                    "Ethylene: ripening, senescence"
                ]
            }
        ],
        summary: `Plant physiology encompasses photosynthesis for food production, transport systems for moving water and sugars, and hormones for regulating growth and development.`,
        practiceQuestions: [
            {
                question: "Why do plants wilt on hot days even with adequate water?",
                hint: "Compare water loss vs water uptake rates",
                answer: "Transpiration exceeds water uptake from roots. The plant cannot replace water fast enough, causing cells to lose turgor and wilt."
            },
            {
                question: "How can you ripen fruits faster at home?",
                hint: "Think about the hormone for ripening",
                answer: "Put unripe fruits in a paper bag with a ripe banana. The banana releases ethylene, which accelerates ripening of other fruits."
            }
        ]
    },

    "Genetics": {
        introduction: `Genetics is the study of heredity and variation. How do traits pass from parents to offspring? Why do siblings look different? This chapter explores the molecular and classical basis of inheritance.`,
        sections: [
            {
                title: "Mendelian Genetics",
                content: `**Mendel's Experiments:**
Gregor Mendel (1860s) studied pea plants and discovered the basic laws of inheritance.

**Key Terms:**
- **Gene**: Unit of heredity
- **Allele**: Different forms of a gene
- **Genotype**: Genetic makeup (BB, Bb, bb)
- **Phenotype**: Observable trait (tall, short)
- **Homozygous**: Same alleles (BB or bb)
- **Heterozygous**: Different alleles (Bb)

**Mendel's Laws:**

**1. Law of Dominance:**
When two contrasting alleles are present, one (dominant) masks the other (recessive).

**2. Law of Segregation:**
Alleles separate during gamete formation; each gamete gets one allele.

**3. Law of Independent Assortment:**
Genes for different traits assort independently.

**Monohybrid Cross:**
Bb × Bb → 1 BB : 2 Bb : 1 bb
Phenotype ratio: 3 dominant : 1 recessive

**Dihybrid Cross:**
BbGg × BbGg → 9:3:3:1 ratio`,
                keyPoints: [
                    "Dominant alleles mask recessive alleles",
                    "Monohybrid: 3:1 phenotype ratio",
                    "Dihybrid: 9:3:3:1 phenotype ratio"
                ]
            },
            {
                title: "Molecular Basis of Inheritance",
                content: `**DNA Structure (Watson & Crick, 1953):**
- Double helix
- Sugar-phosphate backbone
- Base pairs: A-T (2 H-bonds), G-C (3 H-bonds)
- Antiparallel strands (5'→3' and 3'→5')

**DNA Replication:**
- Semi-conservative (each new DNA has one old strand)
- Enzymes: Helicase (unwinds), DNA polymerase (synthesizes)
- Leading strand: continuous
- Lagging strand: Okazaki fragments

**Central Dogma:**
DNA → RNA → Protein
(Transcription) (Translation)

**Transcription:**
- DNA → mRNA in nucleus
- Template strand (3'→5') is read
- mRNA is synthesized 5'→3'

**Translation:**
- mRNA → Protein at ribosomes
- Codons (3 nucleotides) code for amino acids
- tRNA brings amino acids; anticodon matches codon

**Genetic Code:**
- 64 codons for 20 amino acids
- AUG = start codon (Methionine)
- UAA, UAG, UGA = stop codons
- Degenerate (multiple codons for same amino acid)`,
                keyPoints: [
                    "A-T, G-C base pairing",
                    "DNA → mRNA → Protein",
                    "Genetic code is universal and degenerate"
                ]
            },
            {
                title: "Mutations and Genetic Disorders",
                content: `**Types of Mutations:**

**Point Mutations:**
- Substitution: One base replaced by another
- Silent: No amino acid change
- Missense: Different amino acid
- Nonsense: Creates stop codon

**Frameshift Mutations:**
- Insertion or deletion of bases
- Changes reading frame
- Usually severe effects

**Chromosomal Mutations:**
- Deletion: Part of chromosome lost
- Duplication: Part repeated
- Inversion: Part flipped
- Translocation: Part moves to another chromosome

**Genetic Disorders:**

**Autosomal Dominant:**
- One copy of mutant allele causes disease
- Example: Huntington's disease

**Autosomal Recessive:**
- Two copies needed for disease
- Example: Sickle cell anemia, Cystic fibrosis

**X-linked:**
- Gene on X chromosome
- Males more affected
- Example: Hemophilia, Color blindness`,
                keyPoints: [
                    "Mutations can be silent or cause significant changes",
                    "Sickle cell is autosomal recessive",
                    "Hemophilia is X-linked recessive"
                ]
            }
        ],
        summary: `Genetics explains how traits are inherited. Mendel's laws describe inheritance patterns, while molecular genetics reveals how DNA encodes and transmits genetic information.`,
        practiceQuestions: [
            {
                question: "Two heterozygous tall plants (Tt) are crossed. What fraction of offspring will be short?",
                hint: "Draw a Punnett square",
                answer: "TT : Tt : tt = 1:2:1. Only tt (1/4) will be short (recessive phenotype)."
            },
            {
                question: "Why is the genetic code called 'degenerate'?",
                hint: "Count codons vs amino acids",
                answer: "There are 64 codons but only 20 amino acids, so multiple codons code for the same amino acid (e.g., UUU and UUC both code for Phenylalanine)."
            }
        ]
    }
}

// Helper function to get content for a chapter
export function getChapterContent(chapterName) {
    return chapterContent[chapterName] || null
}

// Get available chapters with content
export function getChaptersWithContent() {
    return Object.keys(chapterContent)
}

