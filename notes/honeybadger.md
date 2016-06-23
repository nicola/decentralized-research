THe Honey Badger of BFT Protocols
---------------------------------

Problem space:
- Mission-critical infrastructures
  - Definition: Failure or disruption of mission critical factors will result in serious impact
  - Example: Banking system, railway and aircraft operating and control system, electric power systems, and many other computer systems that will affect the business and society seriously if downed.
  - Traditionally: small scale
    - few nodes
    - single administrator
    - adversarial attacks are not primary concern
  - Challenge: distributed fault tolerant protocols
    - many nodes
    - nodes are mutually distrustful
    - network and nodes can be adversarial
  - Design compromise
    - **robustness over performance**
    - **throughput over latency**
      -  visa processes 2000 tx/sec (peaks of 59000 tx/sec)

Contributions:
- Show: **Network timing assumptions are harmful**
  - liveness not guaranteed if network behaves maliciously (since it violates timing assumptions)
  - not suited for mission-critical applications, e.g.: financial transactions
    - network links are unreliable, speed changes, delays can happen
- Design: optimal asymptotic efficient async BFT protocol
  - no timing assumption: messages are delivered eventually
  - no tuning of params

(Weakly) Synchronous protocols:
- weak synchrony
  - messages are guaranteed to be delivered after Δ (Δ can be time varying or unknown)
- problems:
  - **liveness is not guaranteed** with if network timing assumption are violated
  - **throughput degrades** if network is unpredictable
  - **timeout params are difficult to tune**

HB is an Asynchronous protocol:
- No Network timing assumption
- Based on: Atomic Broadcast Protocol that achieves optimal asymptotic efficiency
