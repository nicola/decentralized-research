# Group

- $order(G)$: number of elements in the group G
- Lagrange theorem:
  - Given a group $G$ and a subgroup $H$, then $order(H)|order(G)$
  - Outcomes: for any $a$ and $n=order(G)$, then $a^n=1$
- Find the correct subgroup: possible orders: $\{1, p_1, p_2,..\}$ 

# Field

A *field* is a commutative ring in which all nonzero elements are invertible.

- *Identity*

  - $0$: additive identity
    - $a + 0 = a$
  - $1$: Multiplicative identity
    - a * 1 = 1
  - Note: $0\neq 1$

- $F^+$: additive group of $F$

- $F^*$: multiplicative group of $F$ 

- $order(F)$, *order*: number of elements in $F$

  - Isomorphic fields: $\phi : F \rightarrow F'$ if $order(F)=order(F')$

- $char(F)$, *characteristic*: smallest positive integer $k$ such that: $\sum_\limits{k}1 = 0$

  - $char(F)= 0 \or p$
  - $char (F) = 0$: If no $k$ exist, contains $\mathbb{Q}$ (rational), $\mathbb{R}$ (real), $\mathbb{C}$ (complex).
  - $char(GF(p^n))=p$ 
  - $char(F)=p$, then order is a prime power $q=p^r$ and $F=\mathbb{F}_{p}=\mathbb{F}_{p^r}$

  

# Polynomials

 $f(x) = \sum^d_\limits{i=0}a_ix^i$ with $a_i\in F$

- *Indeterminate*: symbol treated as a variable, does not designate a constant or a variable
  - Two polynomials *in an indeterminate X* $f(X)$ and $g(X)$ are equal if the coefficients are equal
  - Two polynomials *in a variable x* $f(x)$ and $g(x)$ may be equal depending on the value of $x$.
- $F[x]$: ring of polynomials in the variable $x$ with coefficients in $F$ (like exprs above)
- $deg(f(X))$, *degree*: max power of x
- *Monic*: polynomial $f$ of degree $d$ with $a_d=1$ (e.g. $x^d+a_{d-1}x^{d-1}$+..)
- *Irreducible*: if $f(x)$ can't be written as $f(x)=g(x)h(x)$ with $deg(g) < deg(f)$ and $deg(h)<deg(f)$
  - e.g. $x^2-2$ is irriducible over the integers (but not over the reals)
  - *absolutely irreducible*: $deg(f)=1$ (from Fundamental Theory of Algebra)
- *Root*:
  - $\alpha \in F$ with $f(\alpha)=0$
  - $deg(f)=d$ has $d$ roots
- *Low-degree Polynomial*: Polynomial where the degree $d << |F|$

- *Equality testing*:
  - $|F| \geq n^2$
  - $a_i$, $b_i$ coefficients of Alice and Bob, s.t. $p(x) = \Sigma^n_{i=1} a_ix^i$
  - *Reed-Solomon fingerprint*: $p(r)$
  - Correctness:
    - $p(r) = q(r)$: if the two polynomials are equal, then Bob outputs equal with probability 1.
      - Proof: $a=b$, $p$ and $q$ are the same polynomial
    - $p(r)\neq q(r)$:
      - Let $p\neq q$ be univariate polynomials of degree at most $n$
      - $p$, $q$ agree on at most $n$ points
      - $\Pr_{r\in F}[p(r) = q(r)] = \frac{n}{|F|}$
- *Schwartz-Zippel Lemma*:
  - Let $p\neq q$ be univariate polynomials of degree at most $d$, then:
    - $\Pr_{r\in F}[p(r)=q(r)] \leq \frac{d}{|F|}$
  - Let $p\neq q$ be an $l$-variate polynomials of total degree at most $d$, then:
    - $\Pr_{r\in F^l}[p(r)=q(r)] \leq \frac{d}{|F|}$

- *Multilinear polynomial*: Given a $l$-variate  polynomial $p : \mathbb{F}^l \rightarrow \mathbb{F}$, it is multilinear if it has degree at most 1 in each of the input variables.
  - E.g. $p(x_1, x_2,..x_l) = a_1x_1 + \ldots + a_l x_l$
- *Extension polynomial*: Given a function $f : \{0, 1\}^l \rightarrow \mathbb{F}$, an extension of $f$ is an $l$-variate polynomial $g : \mathbb{F}^l \rightarrow \mathbb{F}$ such that $g(x)=f(x)$ for all $x\in \{0, 1\}^l$
  - $f$ maps $l$-bits to a field to a field. If $f$ and $g$ agree on all the inputs $f$ is defined. $g$ is the extension polynomial. $g$ extends the domain to a much bigger set.
  - $g$ is an amplifying encoding of $f$ (recall Schwartz-Zippel, if extension disagrees on a single location, then they must disagreee everywhere)
- *Multilinear Extension* (MLE): A multilinear extension of $W : \{0, 1\}^d \rightarrow \mathbb{F}$ is a unique $l$-variate polynomial $\tilde{W} : \mathbb{F}^d \rightarrow \mathbb{F}$, such that $W(x) = \tilde{W}(x)$ on any $\{0,1\}^l$
  - multilinear means that polynomial has degree at most 1 in each variable $(1-x_1)(1-x_2)$ is multilinear, $x^2_1x_2$ is not.
  - Fact [VSBW13]: the verifier may have to verify low-degree extension, it's important to know it can be done quickly
    - Given as input all $2^l$ evaluations of $f:{0,1}^l\rightarrow F$, for any point $r\in F^l$, there is an $O(2^l)$-time algorithm for evaluating $\tilde{f}(r)$
      - With lagrange interpolation, it is $O(2^ll)$
      - If $f$ is structured, there might be an extension for which $g(r)$ can be evaluated faster than $O(n^2)$

References:

http://theory.stanford.edu/~dfreeman/cs259c-f11/lectures/finitefields.pdf

# Extension Fields

- *Quotient ring*: $K = F[x] / f(x)$ *ring of all polynomials with coefficients in $F$ subject to the relation $f(x )$*
  - *defining polynomial*: $f(x)$ is an *irreducible* polynomial of degree $d$
    - The choice of the defining polynomial can make a huge difference in running time!
  - $K$ is the set of polynomials with coefficient less than $d$ (or with coefficient in $F$ subject to the relation $f(x)=0$)
- $K$ is an extension field of $F$, $K/F$ is a field extensions
- Field Extension example:
  - $K=\mathbb{Q}[x]/(x^2+1)$ if $F=\mathbb{Q}$ and $f(x)=x^2+1$, 
  - Addition: $(ax+b )+ (cx+d)$
  - Multiplication $(ax+b)*(cx+d) = acx^2 + (ad+bc)x + bd$, using $x^2 = -1$ then $(ad+bc) x + (bc-ac)$
  - $K=\mathbb{Q}[x]/(x^2+1)=\mathbb{Q}(\sqrt{-1})$: $\mathbb{Q}$ adjoin the $\sqrt{-1}$
- $\mathbb{F}_{p^d} =\mathbb{F}_p[x]/f(x)$  are isomorphic for the same $p$ and different any $f(x)$ of degree $d$
  - Example:
    - $\mathbb{F}_{25} = \mathbb{F}_5[x]/(x^2-2) = \mathbb{F}_5(\sqrt{2})$
    - $\mathbb{F}_{25} = \mathbb{F}_5[y]/(y^2-3) = \mathbb{F}_5(\sqrt{3})$
    - $\mathbb{F}_{25} = \mathbb{F}_5[z]/(z^2+z+1)$
      - Isomorphisms given by $y=2x$ and $z=3x+2$
- $\mathbb{F_{p^m}}\subset \mathbb{F_{p^n}}$ iff $m$ divides $n$
- $\overline{\mathbb{F}}_q$, *algebraic closure*: For a fixed $q=p^d$, the union of the finite fields $\mathbb{F}_{q^r}$ for all positive $r$ is the *algebraic closure* of $\mathbb{F}_q$.
  - Any polynomial $f\in\mathbb{F}_q[x]$ has $deg(f)$ roots in $\overline{\mathbb{F}}_q$
- Freshman's dream: $(x+y)^q = x^q+y^q$, for a field $F=\mathbb{F}_q$ of $char(F) = p$ 
- *$q$-power Frobenius map*:
  - $\phi(x)=x^q$ is a ring homomorphism from $F$ to itself
  - $x\in\overline{\mathbb{F}}_q$ and $x\in \mathbb{F_q}$ $\iff $ $x^q=x$

Intuition:

- Consider a single number as a polynomial $f(x) = 7 + 0x+…+x^d$
- $Order(F)=p^m$, for prime $p$ and $m>1$, hence $char(F)=p$



References:

http://theory.stanford.edu/~dfreeman/cs259c-f11/lectures/finitefields.pdf

http://coders-errand.com/zk-snarks-and-their-algebraic-structure-part-4/



# Elliptic curves

- *General Weierstrass equation* (affine equation):
  - $E: y^2+a_1x y + a_3y = x^3+ a_2 x^2+a_4x + a_6$
    - $a_1,\ldots,a_6\in\overline{K}$
    - $(x,y)\in\overline{K}$
    - $\mathcal{O}$, *point at infinity*
- *Singular curve/Non singular or smooth*: 
  - Exists a point $P=(x_P, y_P)$ on $f$ where both partial derivatives $\frac{d\ f}{d\ x}$ and $\frac{d\ f}{d\ y}$ vanish simultaneously at point P (singular point)
  - Singularity occures only if $4a^3+27b^2\neq0$ in $K$
- $E/K$, *"elliptic curve defined over K"* if $a_1,\ldots, a_6 \in K$
- $E(K)$, set of points over $K$
  - $E(K)  = \big\{ (x,y)\in \mathbb{A}^2(K) : y^2 = x^3+ax+b \big\}$
- $E=E(\overline{K})$
- $P=(x_P,y_P)\in E(K)$
- $[n]P =P + P \cdots + P $
- *Short Weierstrass equation* (affine)
  - $E:y^2=x^3 + ax+b$
    - Assume that $char(K)\neq 2,3$
      - substitute $y\mapsto(y-a_1x-a_3)/2$
      - substitute $(x,y)\mapsto \big( \frac{x-3b_2}{36}, \frac{y}{108}\big)$
  - $(x,y)\in E$, then $(x, -y) \in E$
    - every two points come in pairs except $(x, 0)$ and $\mathcal{O}$
- Example 1: Elliptic curve over a field
  - $E/\mathbb{Q} : y^2=x^3-2$ is an elliptic curve
  - $E(\mathbb{Q}) = \big\{ (x,y) \in \mathbb{A}^2(\mathbb{Q}) : y^2=x^3-2) \big\}\cup\big\{\mathcal{O}\big\}$
- Example 2: Elliptic curve over extension fields
  - $E/\mathbb{F_{11}} : y^2 = x^3 + 4x + 3$
  - $E(\mathbb{F}_{11})$ has $11$ points:
    - $\mathcal{O}, (0, y=\sqrt3=5 ), (0, y=-\sqrt3=6),..$
    - If $\mathbb{F}_{11^2} = \mathbb{F}_{11}[x]/(x^2+1) = \mathbb{F}_{11}(\sqrt{-1})$
      - $\#E(\mathbb{F_{11^2}) = 140}$ 
        - New points: $(2, 6i)$,..
          - $y^2 = x^3+4x+3$
          - $y = \sqrt{8} = 6i$
- $\#E(\mathbb{F_q}) |\#E(\mathbb{F_{q^r}})$ since $E(\mathbb{F}_q)$ is a subgroup of $E(\mathbb{F}_q)$
- Getting a point of order $r|\#E(\mathbb{F}_p)$
  - Get a point $P$ and multiply it by the appropriate co-factor $h = \#E / r$
- *$r$-torsion*: 
  - If $order(P) = r$, then $[r]P=\mathcal{O}$
  - $\forall P, [r]P=\mathcal{O}$ then $P\in$ $r$-torsion, $P\in E(\mathbb{\overline{F}_q})$
  - There are $r$ points in $E(\mathbb{{F}_q})$, but many more in $E(\mathbb{\overline{F}_q})$
- Counting points:
  - *Hasse bound*: $|\#E(\mathbb{F}_q) - (q+1)| \leq t=2 \sqrt{q}$
    - Group order lies in the interval between $[q+1-t, q+1+t]$
  - *Trace of Frobenius:* $t$ (the difference between $\#E$ and $(q+1)$)
  - *Deuring:* When $q$ is prime, then every value $N\in $ $[q+1-t, q+1+t]$ can be found as a group order of $\#E(\mathbb{F}_q)$ for some $E$.
    - Example: $q=23$, then hesse interval is $[15,33]$, meaning that there are 19 different group orders taken by elliptic curves over $\mathbb{F_{23}}$
  - *Schoof*: algorithm that made counting points polynomial time (hence practical ECC)
  - $\#E\approx q$ argument:
    - Approximately half of the values $x\in[0,\ldots,q-1]$ will give a quadratic residue $x^3+ax+b\in \text{QR}(q)$ which will give rise to two points $(x, \pm\sqrt{x^3+ax+b})\in E(\mathbb{F}_q)$
    - TODO
- *Frobenius endomorphism $\pi$* for $E$:
  - $\pi : E \rightarrow E, (x, y) \mapsto (x^q,y^q)$
  - Note: $\pi$ maps any point $E(\mathbb{F}_q)$ to $E(\mathbb{F}_q)$, but the set of points fixed by $\pi$ is exactly the group $E(\mathbb{F}_q)$
  - Example:
    - $q=67$
    - $E/\mathbb{F}_q : y^2=x^3+4x+3$
      - $P_1=(15, 50)$
      - $\pi_q(P_1) = (15^q, 50^q)=(15, 50)=P_1$
    - $\mathbb{F}_{q^2}(u), u^2+1=0$
      - $P_2= (2u+16, 30u+39)\in E(\mathbb{F}_{q^2})$
      - $\pi_q(P_2) = ((2u+16)^q, (30u+39)^q) = (65u+16, 37u+39)$
      - $\pi^2_q(P_2)=P_2$
    - $\mathbb{F}_{q^3}(v), v^3+2=0$
      - $P_3 = (15v^2+4v+8, 44v^2+30v+21)\in E(\mathbb{F}_{q^3}$
      - $\pi_q(P_3)= (33v^2+14v+8, 3v^2+38v_21)$
      - $\pi^2_q(P_3)= (19v^2+49v+8, 20v^2+66v_21)$
      - $\pi^3_q(P_3) = P_3$ 
  - $\mathbb{P}^2_K$ *Projective Space over field $K$* 
  - $\big\{(x, y, z) \in K^3\big\} $
- *Division polynomials*: polynomials whose roots reveal torsion points
  - For odd $l$, the $l$-th division polynomial $\psi_l(x)$ on $E$ solves to give the $x$-coordinates of the points of order $l$.
  - division polynomials
  - Example: $E/\mathbb{F}_{101}: y^2 = x^3+x+ 1$ , $\#E(\mathbb{F}_{101}) = 105=3\cdot 5 \cdot 7$
    - $r=2$: the $x$-coordinate of the points of order 2 are found as the roots of $\psi_2(x)=4x^3+4x+4$
      - $\psi_2(x)$ is irreducible in $F_q[x]$, this means no 2-torsion points in $E(F_q)$
    - $r=3$: $\psi_3(x)=(x+73)(x+84)(x^2+45x+36)$
      - Two solutions $x=17$, $x=28$ over  $\mathbb{F}_{101}$
      - This does not mean both solutions are in $\mathbb{F}_{101}$
        - $x=17$ gives $x^3+x+1\not\in\text{QR(q)}$
        - so these points will be defined over $\mathbb{F}_{101^2}$

## Projective Space

- Instead of working with points in 2-space, we work with lines that pass from the origin in 3-space.
  - A point $(x, y) \in \mathbb{A}^2(K)$ ix now a line of all points of the form $(\lambda x, \lambda y, \lambda) \in \mathbb{P}^2(K)$, where $\lambda \in \overline{K}^*$  
  - $\mathbb{P}^2$ is $\mathbb{A}^3 \setminus \{(0,0,0)\}$ with the following congruence condition: $(x_1, y_1, z_1)\sim (x_2, y_2, z_2)$ if there exist a  $\lambda \in \overline{K}^*$  such that $(x_1, y_1, z_1)= (\lambda x_2, \lambda y_2, \lambda z_2)$ 
- $(X:Y:Z)$ representative of the congruence class in projective coordinates of all points on the lines that corresponds to the affine point $(x, y)\in \mathbb{A}^2$.
  - $(x, y) \mapsto (x:y:1)$
  - $\mathcal{O} \mapsto (0:1:0)$
  - $(X:Y:Z) \mapsto (X/Z, Y/Z)$ (For any $(X:Y:Z)\neq \mathcal{O}$
  - Note: this is a trivial mapping, there are many other mappings
- *Homogenizing $E$*:
  - $(X, Y, Z)\in \mathbb{A}^3$, *homogenous coordinates*
  - Simple homogenization: substitute $x=X/Z$ and $y=Y/Z$
    - Multiply by $Z^3$ to clear denominators
    - $E_\mathbb{P} : Y^2Z = X^3+aXZ^2 + bZ^3$
  - $x=X/Z$,  $y=Y/Z^2$ , then $E_\mathbb{P} : Y^2 = X^Z + aXZ^3 + bZ^4$ and $\mathcal{O} = (1 : 0 : 0)$
  - *Jacobian coordinates*:  $x=X/Z^2$, $y=Y/Z^2$, then $Y^2 = X^3 + aXZ^4 + bZ^6$, setting $Z=0$, then $\mathcal{O} = (\lambda^2 : \lambda^3 : 0)$
- *Projective closure* of $E$: set of points $(X,Y,Z) \in \overline{K}$
  - Finally $(0, \lambda, 0)$ is in the projective closure of $E$, these points can't be mapped into $\mathbb{A}^2$.

## Group Law

- Affine
  - Addition, $2M + S + I$:
    - $(x_P, y_P) \mathbin{\oplus} (x_Q, y_Q) = (- \lambda^2 - x_P - x_Q,  -(\lambda x_R + v))$
    - $\lambda = \frac{y_Q - y_P}{x_Q - x_P}$
    - $v= y_P - \lambda x_P$
  - Doubling, $2M + 2S + I$:
    - $[2](x_P, y_P) = (\lambda^2 - 2x_P, -(\lambda x_R + v))$
    - $\lambda = (3x^2_P + a)/(2y_P)$
    - $v = y_P - \lambda x_P$
  - Edge cases:
    - If $P=\mathcal{O}$, return $Q$ (equivalent the reverse)
    - if $P = -Q$ (check if $x_P=x_Q$ and $y_P=-y_Q$)
- Projective (using $x=X/Z$, $y=Y/Z$)
  - Addition, 12M + 2S
  - Doubling, 12M + 2S
  - Note $I >> 20M$   

### Chord and Tangent

- $R = P + Q$
  - Bezout theorem: a line cross a cubic in 3 points
  - Make a line $l : y = \lambda x + v$ between two points $P=(x_P, x_P)$ and $Q=(x_Q, x_Q)$
  - Substitute $l$ in $E$ will give a cubic in $x$
  - This gives 3 roots of which one is $P$, one is $Q$ and one is $-R$
  - Flip $-R$ over the curve to find $R$
- $R = P + P$
  - $l$ is the tanget to $E$ at point $P$
  - $l$ Intersects twice P
- Identity $\mathcal{O}$ (intuition): simultaneously sits infinitely high and infinitely low in the $y$ axis.
- $R + (-R)$
  - $l$ Intersects twice the point at infinity $\mathcal{O}$

### Double-and-add

- $[m] : E \leftarrow E$, multiplication by m
- $P \mapsto [m]P$
- Double and add algorithm
  - Complexity: $log_2(m)$ doublings and $~log_2(m)$ additions (on random $m$)
  - Algorithm:
    - Convert $m$ into binary $(m_{n-1},\ldots, m_0)_2$
    - Set $T\leftarrow P$
    - Starting from second most significant bit $m_{n-2}$ compute until $m_0$:
      - Compute $T \leftarrow [2]T$
      - if $m_i=1$: Compute $T\leftarrow T+P$ 

### Group Law with affine formulas derivation

- General Case: R = P +Q
  - Find $l : y = \lambda x + v$
    - $\lambda = \frac{y_Q - y_P}{x_Q - x_P}$
    - $v = y_P - \lambda x_P = y_Q - \lambda x_Q = \frac{y_Qx_P-y_Px_Q}{x_P - x_Q}$
  - Substitute $l$ into $E$:
    - $(x-x_P)(x-x_Q)(x-x_R) = (x^3 + ax + b) - y^2$
    - RHS
      - $(x^3 + ax + b) - (\lambda x + v)^2$
      - $x^3 - \lambda^2x^2 + (a-2\lambda v)x + b - v^2$
    - LHS
      - $(x-x_P)(x-x_Q)(x-x_R)$
      - $(x^2 - (x_P + x_Q)x + x_Px_Q)(x - x_R)$
      - $x^3 - (x_P + x_Q + x_R)x^2 + (x_Px_Q + x_Px_R + x_Qx_R)x - x_Px_Qx_R$
  - Find $x_R$
    - Looking at $x^2$ coefficients
    - $(x_P + x_Q + x_R) = -\lambda^2$
    - $x_R = - \lambda^2 - x_P - x_Q$
  - Find $y_R$
    - using $l$ (rember we want to substitute with $-y_R$)
    - $y_R = -(\lambda x_R + v)$
- General Case: $2P = P+P$
  - Remember $l$ is the tangent at point $P$!
  - We differentiate the curve equation:
    - $\frac{d}{dx}(y^2) = \frac{d}{dx}(x^3 + ax + b)$
    - $\frac{d}{dx}(y^2) = 3x^2 + a$ (right side)
    - $\frac{d}{dy}(y^2)\frac{dy}{dx} = 3x^2 + a$ (left side)
    - $2y\frac{dy}{dx} = 3x^2 + a$
    - $\frac{dy}{dx} = \frac{3x^2 + a}{2y}$
  - Find $l$
    - $\lambda = \frac{dy}{dx}(P) = (3x^2_P + a)/(2y_P)$
    - $v = y_P - \lambda x_P$
  - Substitute $l$ into $E$:
    - $(x - x_P)(x - x_P)(x - x_R) = (x^3+ax + b) - y^2$
    - ...
    - $x_R = \lambda^2 - 2x_P$
    - $y_R = -(\lambda x_R + v)$
- Exceptions:
  - One of the points is 0: trivial!
  - P is the inverse of Q (P+Q=0)
  - How to handle:
    - if $Q$ or $P = \mathcal{O}$, then skip operation
    - If $x_P = x_Q$
      - Case 1:  $y_P = -y_Q$ (includes $y_P=y_Q=0$), then $P+Q=\mathcal{O}$, 
      - Case 2: $y_P = y_Q \neq 0$, then $P=Q$, then do $2P$
  - Unsafe operation mode:
    - Groups are so large that running into a special case (not adding or doubling) randomly is negligible
      - (chances of having either $P$ or $Q$ to be $\mathcal{O}$) or $P=-Q$

### EC for Cryptography

- ECDLP:
  - Given $Q$, find $k$, such that $[k]P=Q$
- Security of EC for Crypto: We want $\#E(\mathbb{F_q})$ to be a large prime, or a factor of a large prime, since the attacker power is dependent on the size of the largest prime subgroup.
  - $E/\mathbb{F}_{1021} : y^2 = x^3 + 905x + 100 $
  - $\#E(\mathbb{F}_q) = 966 = 2 \cdot 3 \cdot 7 \cdot 23$
  - Generator $P = (1006,416)$
  - Given $Q=(612,827)$ find $k$ such that $[k]P = Q$
  - Attack:
    - try every multiple $[i]P$ of $P$ until $i=k$
  - Better attack:
    - Instead of looking for i in $2\leq i \leq 965$, map the instance into each prime order subgroup:
      - Multiply $P$ by appropriate co-factor and solve for $k_j \equiv k \mod j$, $j\in\{2,3,7,23\}$
        - $j=2$:
          - $P_j=P_2 = [h=\#E(\mathbb{F}_q)/2]=[966/2]P = [483](1006, 416) = (174,0)$
          - $Q_j=Q_2=[966/2]Q = [483](612, 827)=(174,0)$
          - so $Q_2 = [k_2]P_2$ gives $k_2 = 1$
        - $j=3$
          - $P_3 = [966/3]P = (147, 933)$
          - so $Q_3=[k_3]P_3 = \mathcal{O}$, gives $k_3=3$
        - $j=7$
          - $P_7=[966/7]P=(906,201)$
          - $Q_7 = [966/7]Q = (906,201)$
          - so $Q_7=[k_7]P_3$, gives $k_7=1$
        - $j=23$
          - $P_{23} = [966/23]P =(890, 665)$
          - $Q_23 = [966/23]Q=(68,281)$
          - Exhaust $k_{23}\in\{1,\ldots,22\}$ to find $k_{23}=20$
      - Use Chinese Reminder Theroem to solve:
        - $k\equiv k_2 = 1 \mod 2;$
        - $k\equiv k_3 = 0 \mod 3;$
        - $k\equiv k_7 = 1 \mod 7;$
        - $k\equiv k_23 = 20 \mod 23;$
        - this results to $k\equiv 687 \mod \#E$

# Arithmetic circuits

- *Arithmetic circuit*: addition and multiplication gates over a finite field $\mathbb{F}$
- *AC evaluation problem*: Given a $\mathcal{C}$ of depth $d$ and input $x$, evaluate $\mathcal{C}$ on $x$

---

https://en.wikipedia.org/wiki/Algebraically_closed_field

----

# DAG

- *Valiant Lemma*: For any DAG $G$ with $m$ edges and $d$ depth, there is a set $S$ of $m/\log d$ edges s.t. deleting them we obtain a graph of depth at most $d/2$
  - *Extension*: $\mathsf{depth}(G) \leq d = 2^i$, there is a set of $m/i$ edges s.t. deleting them depth is at most $d/2$.
  - Attack:
    - Partition the edges into sets $E_1\ldots E_n$

# Probabilistically Checkable Proofs

- Deterministic verifier has to read an entire proof

- Randomized verifier can only read parts of the proof

PCP Theorem [BFLS91, FCLSS91, AS92, ALMSS92]

- For every problem in NP, there exist a randomized verifier that
  - at most $O(log(n))$ random coins
  - O(1) queries
- Completeness: $T$ is true, $\Pr[Ver^{\pi}(T) = acc] =1$
- Soundness: $T$ is fales, $\Pr[Ver^{\pi}(T) = acc] =1/10$
- $NP \subseteq PCP_{1/2}[O(log(n), O(1))]$

PCP Challenges:

- Proof is not too long
- Prover overhead in writing the proof
- Verifier running time

Proof transformations:

- Locality of Error:
  - Every false proof must have some local error (NP-completeness gives us this)
- Abundance of local errors

Algebraic PCP

- Given a system of $m$ quadratic equations of the form $\Sigma {a_{ij}x_ix_j} = b$, is there a boolean setting for the variable $x_i$ which simultaneously satisfy the system?
  - In NP, the witness would be the satisfying $x$
  - In PCP, proof is an encoding of $x$ which would allow for efficient verification

- Input: (operations over GF(2))

  - $<a^{(1)}, x> = b_1$
  - $<a^{(2)}, x> = b_2$

  - $<a^{(b)}, x> = bn$
  - where $a^{(i)}\in\{0,1\}^n$, $x\in\{0,1\}^n$, $b_i\in\{0,1\}^n$, $<a, x> = \Sigma a_ix_i$
  - Is it simultaneous satisfiable?
    - In NP, one would give x
    - In PCP, we get an n-bit string and generate an $2^n$-bit string using $Had(x)$
      - $Had(x)$ can be checked efficiently

Hadamard Encoding:

- Simple Linearity Testing:
  - Assume oracle acces to a function $f: \{0,1\}\rightarrow\{0,1\}$
  - If for every $x, y \in \{0,1\}^n$, $f(x+y) = f(x) + f(y)$
  - Then $f$ is linear
  - Note: this test requires $O(2^{2^n})$ to $f$
  - Can we do it in constant number of times? Yes!
- Constant-time Linearity Testing (Blum-Luby-Rubinfeld):
  - Closeness:
    - Let $\delta \in [0,1]$, $f, g: \{0,1\}^n\rightarrow \{0,1\}$
    - They are $\delta$-close if they $\Pr_{x\in_RR \{0,1\}^n}[f(x) = g(x)]\geq \delta$
    - So: $f$ is $\delta$-close to a linear function, if there is a linear function $g$ such that $g$ and $f$ are $\delta$-close
  - Closeness theorem:
    - Let $f: \{0,1\}^n \rightarrow \{0,1\}$ such that for some $\delta> \frac{1}{2}$
    - $\Pr_{x,y\in_R\{0,1\}^n}[f(x+y) = f(x) + f(y)] \geq \delta$
    - Then $f$ is $\delta$-close to a linear function
  - Randomized Linear Testing:
    - Pick $x, y$ at random and test $f(x+y)= f(x)+ f(y)$
    - $\Pr[Test(f) \text{ fails}] \geq \frac{1}{2}$ (hence $f$ is not $p$-close to linear)

- $Had: \{0, 1\}^n\rightarrow\{0,1\}^{2^n}$
  - $x\rightarrow \{<x, y>\}_{y \in \{0,1\}^n}$
  - $\ell_x:\{0,1\}^n \rightarrow \{0,1\}$ (set of all linear function on input x)
  - $y\rightarrow <x,y> = \Sigma x_i, y_i \mod 2$
  - Observe: $\forall y,z \in\{0,1\}^n, \ell_x(z) = \ell_x(y+z)$
- Self-correction property:
  - Let $f: \{0,1\}^n \rightarrow\{0,1\}$, $f$ is $\delta$-close to $\ell_x$ for some $x$:
    - $\Pr_y[f(y) \neq l_x(y)]\leq \delta$
    - Candidate: $\Pr_{y\in \{0,1\}^n}[\ell_x(z) = f(y+z) - f(y)]$

# Interactive Proofs

*Freivalds's protocol for verifying matrix products* (variant):

- Inputs: $A, B \in F^{n \times n}$
- Goal: compute $A\times B$
  - Fastest known algorithm: $n^{2.37}$
  - Can a prover convince a verifier such that the verifier takes $O(n^2)$
- Protocol:
  - $V$ picks $r\in_R F$ and lets ${\bf x} = (r, r^2, ..., r^n)$ (in Freivalds original protocol ${\bf x}$ is random)
  - $V$ computes $C * {\bf x}$ and $(AB)\times \mathbf{x}$
- Runtime> 3 matrix vector products which takes $O(n^2)$
  - $C * {\bf x}$ (1 prod)
  - $AB * {\bf x} = (A * (B * {\bf x}))$ (2 prods)
- Correctness:
  - If $C=A*B$, $V$ accepts with probability 1
  - If $C\neq A * B$, $V$ rejects with probability at least
    - $1 - \frac{n}{|F|} \geq 1 - 1/n$
      - $(C * {\bf x})_i = \Sigma^n_{j=1} C_{ij}r^j$ (the Reed-Solomon fingerprint at $r$ of the $i$-th row of $C$)
        - Recall  ${\bf x} = (r, r^2, ..., r^n)$
      - Similarly for $(AB * {\bf x})$
    - Even if one row in $C$ does not equal the corresponding row of $AB$, the fingerprint will differ with probability at least $1-\frac{1}{n}$

*Sum-Check Protocol [LFKN90]*

- Input: $V$ given oracle access to an $l$-variate polynomial $g$ over field $F$
- Goal: Compute quantity
  - $\Sigma_{b_1 \in \{0,1\}}\Sigma_{b_2 \in \{0,1\}}..\Sigma_{b_l \in \{0,1\}} g(b_1,..,b_l)$
- Protocol:
  - Start: $P$ prover sents $C_1$
  - Round 1: $P$ sends univariate polynomial $s_1(X_1)$
    - $H_1(X_1) = \Sigma_{b_2 \in \{0,1\}}..\Sigma_{b_l \in \{0,1\}} g(X_1,..,b_l)$
    - $V$ checks: $C_1 = s_1(0) + s_1(1)$
      - If check passes, $V$ can believe that $C_1$ is the correct answer so long as $s_1 = H_1$. How can the verifier convince herself that they are the same polynomial?
    - $V$ checks: $H_1(r_1) = s_1(r_1)$ (recursively)
      - $V$ picks $r_1$ at random from $F$ and sends it to $P$
        - $H_1(X_1) = \Sigma_{b_2 \in \{0,1\}}..\Sigma_{b_l \in \{0,1\}} g(r_1,..,b_l)$
  - Round $l$ (final round): $P$ sends $s_l(X_l)$ claimed to be equal to:
    - $H_l := g(r_1,..., r_{l-1})$
    - $V$ checks that $s_{l-1} = s_l(0) + s_l(1)$
    - $V$ picks random $r_l$ at random and needs to check that $s_l(r_l) = g(r_1, ..., r_l)$
- Completeness: holds by design. If $P$ sends messages, then all checks from $V$ will pass.
- Soundness: If $P$ does not send the prescribed messages (e.g. true answer at the start), $V$ rejects with high probability. ($1 = \frac{l*d}{|F|}$, where $d$ is the maximum degree of $g$).
  - Proof by induction on the number of variables $l$:
    - Base case: $l=1$
      - $P$ sends a single message $s_1(X_1)$ which is claimed to be $g(X_1)$
      - $V$ picks $r_1$ at random, checks that $s_1(r_1) = g(r_1)$
      - If $s_1 \neq g$, then $\Pr_{r_1 \in F}[s_1(r_1) = g(r_1)] \leq \frac{d}{|F|}$
    - Inductive case: $l \gt 1$
      - $P$ first message $s_1(X_1)$ is claimed to equal 
        - $H_1(X_1) = \Sigma_{b_2 \in \{0,1\}}..\Sigma_{b_l \in \{0,1\}} g(X_1,..,b_l)$
        - If $s_1 \neq H_1$, then $\Pr_{r_1 \in F}[s_1(r_1) = H_1(r_1)] \leq \frac{d}{|F|}$
        - So $s_1(r_1) \neq H_1(r_1)$, then $P$ must prove a false claim in the recursive call.
      - The recursive call applies sum-check to $g(r_1, X_2,...,X_l)$ which is an $l-1$-variate polynomial.
      - By induction $P$ fails to convince $V$ in the recursive call with probability at least $1- \frac{d (l-1)}{|F|}$ 
    - Summary:  If $s_1\neq H_1$, $V$ accepts with probability:
      - $\Pr_{r_1 \in F}[s_1(r_1) = H_1(r_1)] + \Pr_{r_2,..r_l \in F}[V\text{ accepts} | s_1(r_1)\neq H(r_1)] \leq \frac{d}{|F|} + \frac{d(l-1)}{|F|} \leq \frac{dl}{|F|}$

- Costs:
  - Comm complexity: $O(dl)$ $F$ elements
    - $P$ sends $l$ messages, each a univariate polynomial of degree at most $d$
    - $V$ sends $l-1$ messages each consisting of 1 $F$
  - Runtime
    - Verifier: $O(dl + \text{time required to eval g at one point})$
    - Prover: $O(d * 2^l * \text{time required to evaluate g at one point})$
      - $2^l$ number of evaluations of g
      - $d$.. (TODO)



##  Proof of Space

- $(n, \alpha, \beta, d)$-Depth-Robust

  - $(n, \alpha, \beta, d)$-depth-robust is a graph of size $n$ degree $d$ which every subgraph of size $\alpha n$, there is a path o f length at least $\beta n$.

- $(n, \alpha, \beta)$-Expander Graph:

  - Let $\mathcal{G}$ be an undirected graph on a vertex set $V$ of size $n\in \mathbb{N}$ 
  - for any subset $S\subseteq V$, define $\Gamma(S) = V \setminus S$ that have an edge to some vertex in $S$
    - $\Gamma(S)$: the nodes that are not in $S$ but that have an edge to $S$
  - For any constant $0< \alpha  < \beta < 1$:
    - IFF $\mathcal{G}$ is an $(n, \alpha, \beta)$-expander graph
    - IFF $|\Gamma(S) \cup S| \geq \beta n$ and $|S|\geq \alpha n$

- $(1+\delta)$- Expanding:

  - A graph $\mathcal{G}$ is $(1+\delta)$- expanding if  $|\Gamma(S) \cup S| \geq (1+\delta) |S|$ 

- Chung's construction yields an $(n, \alpha, \beta)$ bipartite expander $(0 < \alpha < \beta < 1)$ for sufficiently large $n$ with overwhelming, probability if:

  - $d > \frac{H_b(\alpha) + H_b(\beta)}{H_b(\alpha) - \beta H_b(\frac{\alpha}{\beta})}$
    - where $H_b(\alpha) = -\alpha log_2 \alpha - (1-\alpha)log_2(1-\alpha)$
  - Proof:
    - A bad permutation is a permutation that does not yield an expander
    - $\Pr(\Pi\text{ is bad}) = \frac{(C[n, \alpha n] C[n, \beta n]) (C[d\beta n, d \alpha n](d \alpha n)!)(d-d\alpha n)!}{(dn)!}$
      - Total number of permutations $\Pi$: $dn!$ permutations
      - Combinations of sources $U$ and sinks $V$:  $C[n, \alpha n]C[n, \beta n]$
        - it connects a subset $U$, $|U|=\alpha n$ sinks to a subset $V$, $|V|=\beta n$ sources
      - Ways to connect $U$ and $V$:  $C[d \beta n, d \alpha n](d\alpha n)!$
      - Ways to connect the rest of edges not incident on $U$: $(dn-d\alpha n)!$ 
      - simplifies to $\Pr(\Pi\text{ is bad}) = C[n, \alpha n] C[n, \beta n] C[d\beta n, d \alpha n]/C[dn, d\alpha n]$
    - Using Robbins' inequality for Stirling approximation:
      -  $\sqrt{2\pi n}(n/e)e^\frac{1}{12n+1} < n! < \sqrt{2\pi n}(n/e)^n e^\frac{1}{12n}$
      -  we have $log_2(C[n, \alpha n])=nH_b(\alpha) - \frac{1}{2}log_2n + o(1)$
      -  $log_2\Pr(\Pi\text{ is bad}) = n[H_b(\alpha)+H_b(\beta)+ d\beta H_b(\alpha/\beta) - dH_b(\alpha)] - log_2n + o(1)$
         - if the bound on $d$ holds, then $\Pr(\Pi\text{ is bad})$ decreases exponentially as $n$ increases.

- Red-black pebbling game:

  - red pebbles: incorrect labels during Initialization
  - black pebbles: labels stored in advice S
  - $\mathsf{Red-Black-Pebbles}^{\mathcal{A}}(\mathcal{G}, V_C, \mathsf{Chal}, t)$:
    1. $\mathcal{A}$ outputs $R\subseteq[N]$ (red pebbles indices) and $S\subseteq [N]$ (of black pebble indices).
    2. Challenger samples:
       1.  $c_1,..,c_\lambda \leftarrow_R \mathsf{Chal}(n)$. If $c_i\in R$ for some $i$, $\mathcal{A}$ fails immediately.
       2.  $v_1,..,v_k$ uniformly at random from indices in $V_C(n)$
    3. $\mathcal{A}$ Plays the random (black) pebbling game on $\mathcal{G}(n)$:
       1.  challenges  $v_1,..,v_k$
       2.  initial pebble configuration $P_0 = R \cup S$
       3.  runs for $t$ parallel rounds
       4.  outputs final configuration $P_t$
       5.  $\mathcal{A}$ wins if $P_t$ contains pebbles on all of $v_1,..., v_k$

- Graph Labeling PoS:

  - *A graph labeling PoS with $\mathcal{G}(b)$ , $V_C(n)$, $\mathsf{Chal}(n)$ and a cost function $c(n)$ is $(s, c(n) \cdot t, \mu)$-parallel-sound iff the probability that $\mathcal{A}$ wins the $\mathsf{Red-Black-Pebbles}^\mathcal{A}(\mathcal{G}, V_C, \mathsf{Chal}, t)$ is bounded by $\mu$ where $|S| = s$.*

- Stacked Bipartite Expanders:

  - $G_{(n, k, \alpha, \beta)}$:
    - stacking $(n, \alpha, \beta)$ bipartite expanders,
    - n(k+1) vertices partitioned into $k+1$ sets each of size $n$, $V= \{V_0,.. V_k\}$
    - all edges go from $V_{i-1}$ to $V_i$ for some $i$ from $1$ to $k$.
    - has n sources and n sinks with maximum in-degree as the bipartite expander.
  - pebblling each expander resylts in a sequence $\bold{P}$ that pebbles $G$ using $S(\bold{P})=2n$ space in $T(\bold{P})= n(k+1)$ moves.

- Paul and Tarjan: If $\bold{P}$ pebbles any subset of $2\alpha n$ sinks of $G_{n, k, \alpha, \beta}$ starting with $|P_0| \leq \alpha n$ and using $S(P) \leq \alpha n$ space, then $T(\bold{P})\geq (\frac{\beta}{2\alpha})^k$

  
