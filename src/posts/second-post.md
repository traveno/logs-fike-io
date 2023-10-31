---
title: LaTeX within Markdown, can it be done?
date: 2023-08-08
blurb: Who said that?
published: true
layout: blog
tags:
  - testing
---
<script>
  import Window from '/src/lib/widgets/Window.svelte';
</script>

If $Y_1$ is a standard normal random variable, then $Y_1^2$ will follow a Chi-square distribution with 1 degree of freedom


It can be observed that $Y_1$ has a range of $-1 \leq Y_1 \leq 1$. Similarly, $Y_2$ is $0 \leq Y_2 \leq 1$. To form the triangle shape,
an additional constraint is needed: $|Y_1| + Y_2 \leq 1$.

$$
\begin{equation*}
  f(y_1,y_2) = \begin{cases}
    1 & -1 \leq Y_1 \leq 1, 0 \leq Y_2 \leq 1, |Y_1| + Y_2 \leq 1 \\
    0 & \textnormal{otherwise}
  \end{cases}
\end{equation*}
$$

A split integral will be needed to find $E(Y_1Y_2)$ due to the special constraint.

$$
\begin{align*}
  E(Y_1Y_2) &= \int_{-1}^{0}\int_{0}^{1+y_1}y_1y_2dy_2dy_1 + \int_{0}^{1}\int_{0}^{1-y_1}y_1y_2dy_2dy_1 \\
  &= \int_{-1}^{0}\dfrac{y_1(1+y_1)^2}{2}dy_1 + \int_{0}^{1}\dfrac{y_1(1-y_1)^2}{2}dy_1 \\
  &= \dfrac{1}{2}\int_{-1}^{0}y_1(1+y_1)^2dy_1 + \dfrac{1}{2} \int_{0}^{1}y_1(1-y_1)^2dy_1 \\
  &= \dfrac{1}{2}\int_{-1}^{0}\left(y_1+y_1^3+2y_1^2\right)dy_1 + \dfrac{1}{2}\int_{0}^{1}\left(y_1+y_1^3-2y_1^2\right)dy_1 \textnormal{ (expanded)} \\
  &= \dfrac{1}{2}\left[ \dfrac{y_1^2}{2} + \dfrac{y_1^4}{4} + \dfrac{2y_1^3}{3} \right]_{-1}^0 + \dfrac{1}{2}\left[ \dfrac{y_1^2}{2} + \dfrac{y_1^4}{4} - \dfrac{2y_1^3}{3} \right]_0^1 \\
  &= -\cancel{\dfrac{1}{2}\left[ \dfrac{1}{2} + \dfrac{1}{4} - \dfrac{2}{3} \right]} + \cancel{\dfrac{1}{2}\left[ \dfrac{1}{2} + \dfrac{1}{4} - \dfrac{2}{3} \right]} \\
  &= 0
\end{align*}
$$

The uniqueness property of mgfs allows us to show that $U$ follows a Chi-square distribution with 2
degrees of freedom.
