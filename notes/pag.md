# PAG

PAG contributions
- accountable and privacy preserving gossip protocol
- messages are kept private
- relies on nodes acting as monitors to enforce correct dissemination
- it is a Nash equilibrium: selfish nodes have no interest in deviating from the protocol

PAG obligations
- obligation to receive: nodes must receive the updates from predecessors
- obligation to forward: nodes must forward the updates to successor at R+1
- unlinkability between updates and nodes: node A sends update to node B. Other nodes, except A and B, should not be linking A and B

---

Gossip-based systems
- cost effective
- scale up to millions of users
- resilient to churn
- vulnerable to selfish behavior

Gossip protocols
- tasks
  - handle their neighbors (full membership/random sampling)
  - handle message exchange (dissemination with high probability) - NEEDS accountability
- rounds: when message exchange happens
- gossip period: duration of a round
- source: disseminates the content
- updates: chunk of the content that source disseminates
- dissemination fanout: number of nodes to which content is forwarded

Selfish behavior
- maximize a node benefit (upload the least)

Global Active Opponent
- global: can monitor and record any network link and its traffic
- active: it can control  some nodes and make them share information/deviate from the protocol
- however, not able to revert encryption

Accountability solutions
- Secure logs
- Secure hardware
- problem: nodes must share their log (others can learn about their interests)
- problem: learn interest graph (learn from other users)
