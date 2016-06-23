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
- Design:
  - Reduction from Atomic Broadcast to Atomic Common Subset
    - optimal asymptotic efficient async BFT protocol)
    - achieves optimal asymptotic efficiency O(N) compared to O(N^3)
    - threshold encryption preserves fairness
- Implementation: running on 100 nodes

(Weakly) Synchronous protocols:
- weak synchrony
  - messages are guaranteed to be delivered after Δ (Δ can be time varying or unknown)
- problems:
  - **liveness is not guaranteed** with if network timing assumption are violated
  - **throughput degrades** if network is unpredictable
  - **timeout params are difficult to tune**

Deterministic Async Agreement
- FLP result: impossibility of consensus with one faulty process
- Impossible for most tasks

*-Sync Agreement: rely on timing assumptions (consider Δ as a measure of real time)
- strong, Δ-synchrony assumption: every message is delivered in no longer than Δ
- partial synchrony (? definition)
  - unknown-Δ-synchrony: unable to know
  - eventual synchrony: guaranteed to hold after some (unknown) instant
- weak synchrony: delay bound is time varying but eventually not faster than poly(t) (? is this partial sync)
  - in practice, this is implemented via some sort of exponential backoff
  - hence, delays when recovering form network partitions

Async Agreement: do not rely on timers, make progress when messages get delivered
- use causal clocks (?): make sure that every message will be delivered in order

HB is an Asynchronous protocol:
- No tuning of params
- No Network timing assumption
  - messages are delivered eventually
- Based on:
  - Byzantine Async consensus (at least 2/3 honest nodes)
  - Async Common Subset (and MVBA)
  - Threshold encryption
- Claims
  - Fairness: adversary cannot significantly delay an honest party's request from being committed (?)
  - Split the workload evenly amongst all nodes
  - Efficiency: decrease worst-case overhead from O(N^3) to O(N) for large batch sizes (because of ACS)
  - No censorship: Adversary cannot selectively censor specific transactions (because of threshold public key crypto)
