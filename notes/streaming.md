## Streaming Authenticated Data Structures

Motivation
- would be desirable if searching in inbox has a proof to verify that no email was omitted

Generalized Hash Tree
- based on lattices assumption
- has algebraic properties that Merkle trees lack
  - hash function is algebraic
- solve domain range-discrepancy problem
    - f(l(w)) = h(l(u), l(v))
    - labels of GHT not uniquely determined by labels

Why Merkle trees fail
- very efficient proofs of membership and range seach queries (log(n))
- to update the digest, client needs to interact with the server
  - to avoid interaction: accumulator-based solutions (?) or proofs that have low incremental cost

Streaming Setting
- both prover and verifier observe a stream
- dataset rapidly evolves (stock quote, network flow, sensor stream)
- verifier can only store small state
- interactive protocols are expensive (e.g. pay for each request)

Streaming Authenticated Data Structures (SADS)
- do not require any interaction between client & server
- prover insters streaming elements in DS
- verifier stores and update small states of size O(log(n))
- verifier can ask prover to prove queries on the data structure, prover taks O(logMlogN) to reply
- properties
  - independence of prover and verifier, they update their state independently
  - efficiency
  - expressiveness
    - (non)-membership, successor, range search, frequency

SADS Scheme
- pk <- genkey(1^k, n): 
- {auth(D_0), d_0} <- initialize (D_0, pk)
- d_{h+1} <- updateVerifier (ups, d_h, pk)
- {D_{h+1}, Auth(D_{h+1})} <- updateProver (ups, D_h, auth(D_h), pk)
- {a(q), P(q)} <- query (q, D_h, auth(D_h), pk) (verifier)
- {1, 0} <- verify (q, a(q), P(q), d_h, pk) (prover)
- Correct
- Secure

Small integer solution (SIS) problem


