Problem:
- many conflicting blocks are created, but discarded, so performance sucks
- more connected miners spread their blocks faster, so fewer of their blocks conflict

BlockDAG solution:
- allow blocks to reference multiple predecessors - allows more forgiving
- incentive to attempt and include different transactions

Design:
- "inclusive rule" to choose  a main chain from the DAG
  - selectively incorporate contents of off-chain blocks in the log (if they don't conflict)
  - awards fees of accepted transactions 

Limitation:
1. Attackers that try to double spend, may publish blocks generated in failed attempts and collect fees for these blocks
  - Possible fix: mitigated with longer waiting times for transation approval (this will make the cost of an attacker grow)
2. selfish mining
