# Probability Trees and Conditional Expectations

**Learning outcomes**
- Calculate expected values, variances, and standard deviations and apply them to investment problems.
- Formulate an investment problem as a probability tree and explain conditional expectations in investment use.
- Calculate and interpret updated probabilities using Bayes' formula.

> [!tip] SEE THIS BEFORE EXAM
> **Expected value**
> $$
> E(X) = \sum P(X_i)X_i
> $$
> **Variance and standard deviation**
> $$
> \sigma^2(X) = \sum P(X_i)[X_i - E(X)]^2
> $$
> $$
> \sigma(X) = \sqrt{\sigma^2(X)}
> $$
> **Conditional probability**
> $$
> P(A|B) = \frac{P(AB)}{P(B)}, \qquad P(B)\neq 0
> $$
> **Conditional expected value**
> $$
> E(X|S) = \sum P(X_i|S)X_i
> $$
> **Total probability rule**
> $$
> P(A) = \sum P(A|S_i)P(S_i)
> $$
> **Total probability rule for expected value**
> $$
> E(X) = \sum E(X|S_i)P(S_i)
> $$
> **Bayes' formula**
> $$
> P(\text{Event}|\text{Info}) = \frac{P(\text{Info}|\text{Event})}{P(\text{Info})}P(\text{Event})
> $$
> **Notation in simple language**
> - $E(X)$: expected value, probability-weighted average outcome.
> - $\sigma^2(X)$: variance, weighted squared distance from expected value.
> - $\sigma(X)$: standard deviation, square root of variance.
> - $S$: scenario or event used for conditioning.
> - Prior probability: your probability before new information arrives.
> - Posterior probability: your updated probability after new information arrives.
> - **You are given three outcomes and their probabilities. What is the first move?** Multiply each outcome by its probability and add. That always gives expected value first.
> - **You are asked for variance. What order should you follow?** Expected value first, then deviations, then squared deviations, then probability weights, then sum.
> - **A tree has scenario probability on the first branch and conditional probability on the second branch. How do you get terminal probability?** Multiply along the path.
> - **You already know the scenario happened. Which expectation matters now?** Use conditional expected value, not the old unconditional expectation.
> - **New information arrives. What is the Bayes move?** Find unconditional probability of the information first, then scale the prior by likelihood divided by that unconditional probability.

> [!abstract] MEMORISE
> - Expected value is a weighted average, not a guaranteed realized value.
> - Variance is in squared units; standard deviation is in the original units.
> - Probability trees help turn messy scenario stories into clean multiplication and addition.
> - Bayes updates priors into posteriors using new information.
> - When events are mutually exclusive and exhaustive, their probabilities must sum to 1.

## Core Idea

1. This module is about making decisions when the future can break in different directions and each direction carries its own probability.
2. Expected value is the center of that game. What is expected value: the probability-weighted average of all possible outcomes.
3. In investing, expected value is a forecast, not a promise. One realized outcome can miss it badly, but over many similar situations it is the rational anchor.
4. Do not confuse expected value with sample mean. Expected value is forward-looking or population-based; sample mean is historical and equally weighted across observed data.
5. Variance and standard deviation tell you how much reality may wander away from that forecast.

## Expected Value, Variance, and Standard Deviation

6. For a discrete random variable, expected value is:

$$
E(X) = \sum P(X_i)X_i
$$

7. Why is expected value used: it compresses many uncertain outcomes into one rational forecast before you commit money, capital, or a view.
8. The probability weights must sum to 1, otherwise the expected value calculation is not built on a complete set of possibilities.
9. Variance is the expected value of squared deviations from expected value:

$$
\sigma^2(X) = E\{[X-E(X)]^2\}
$$

10. In expanded form:

$$
\sigma^2(X) = \sum P(X_i)[X_i-E(X)]^2
$$

11. What is variance: the probability-weighted measure of how spread out the outcomes are around the forecast.
12. Variance cannot be negative because squared deviations cannot be negative.
13. If variance is zero, there is no uncertainty left. That means the outcome is certain and the variable is not random anymore.
14. Standard deviation is the positive square root of variance:

$$
\sigma(X)=\sqrt{\sigma^2(X)}
$$

15. Why is standard deviation used: it measures dispersion like variance but stays in the same units as the original variable, so your brain can actually read it.
16. If return is measured in percent, variance is in percent squared but standard deviation is back in percent.
17. The mechanical order never changes: expected value first, variance second, standard deviation last.

> [!question] EPS DISPERSION DRILL
> Problem: You are given outcome-probability pairs for earnings per share. What sequence gets you to standard deviation fastest without messing up?
> ---
> First compute $E(X)$. Then compute each deviation from $E(X)$, square it, weight by probability, and sum for variance. Then take the square root.
> 
> **Takeaway:** if you skip expected value and jump into variance, the whole calculation collapses.

18. A higher expected value is not automatically better if standard deviation explodes beside it. Forecast and risk must be read together.

## Probability Trees

19. A probability tree is a visual machine for problems with stages, branches, and conditional outcomes.
20. What is a probability tree: a branching diagram that shows scenarios first, then outcomes within each scenario, with probabilities attached at each step.
21. Trees are especially useful when new information or a scenario changes the probabilities of later outcomes.
22. Start with mutually exclusive and exhaustive scenarios. What is mutually exclusive: only one can happen. What is exhaustive: together they cover all possible states.
23. Put scenario probabilities on the first branches, then conditional probabilities on the later branches.
24. Terminal probabilities come from multiplication along a path. Scenario probability times conditional probability gives the unconditional probability of that final outcome.
25. Once terminal probabilities are built, you can compute unconditional expected value directly from them if you want.
26. Or you can compute conditional expected value inside each scenario first and then work backward using scenario probabilities.

> [!example] THE CREDIT DESK ON A PANIC MORNING
> Picture a distressed-debt desk before the open. One branch says the economy stabilizes. Another says it buckles harder. Under each branch, recovery values split again. The tree is not decoration here. It is the only way to stop the desk from mixing scenario odds with recovery odds and accidentally hallucinating precision.

## Conditional Probability and Conditional Expectation

27. Conditional probability means the probability of one event after you already know another event happened.
28. The formula is:

$$
P(A|B) = \frac{P(AB)}{P(B)}
$$

29. Why is conditional probability used: once some event is known, the sample space shrinks and the old unconditional probability is no longer the right one.
30. Conditional expected value does the same thing for forecasts. It updates the forecast of a random variable after a scenario is known.
31. The formula is:

$$
E(X|S) = \sum P(X_i|S)X_i
$$

32. What is conditional expected value: the probability-weighted average outcome after locking yourself inside one scenario.
33. If rates are known to be stable, you do not use the old unconditional expected earnings number anymore. You use the expected earnings conditional on stable rates.
34. Conditional variance also exists. It measures dispersion given a specific scenario, not across all scenarios mixed together.
35. The source's practical message is simple: use conditional variance to assess risk once a particular scenario becomes the relevant one.

## Total Probability Rule

36. The total probability rule rebuilds an unconditional probability from conditional pieces.
37. If scenarios $S_1, S_2, ..., S_n$ are mutually exclusive and exhaustive, then:

$$
P(A) = \sum P(A|S_i)P(S_i)
$$

38. This is just weighted averaging again, but now the thing being averaged is a probability.
39. The same logic carries over to expected value:

$$
E(X) = \sum E(X|S_i)P(S_i)
$$

40. This is the total probability rule for expected value. You compute the forecast inside each scenario, then weight those scenario-specific forecasts by the scenario probabilities.
41. If your conditional probabilities are internally consistent, the unconditional expected value from the tree must match the direct expected value from terminal probabilities.
42. If they do not match, your setup is broken somewhere. Either branch probabilities do not add correctly or you mixed up a conditional with an unconditional number.

> [!warning] TREE CONSISTENCY TRAP
> Do not add probabilities along a path. Multiply along a path, add across terminal branches. That one mistake wrecks almost every probability tree question.

## Scenario-Based Forecasting

43. In the BankCorp style setup from the source, interest-rate environments drive different earnings possibilities.
44. Once the declining-rate scenario is known, expected earnings become the weighted average inside only that branch.
45. Once the stable-rate scenario is known, expected earnings shift to the weighted average inside the stable branch instead.
46. The old unconditional forecast is a blend of scenario-specific forecasts, not a rival to them.
47. This is the deeper point: information does not change arithmetic; it changes which probabilities are relevant.
48. The exact same logic works for operating costs, recoveries on defaulted bonds, sales, or any other discrete random variable.

> [!question] CONDITIONAL EXPECTATION DRILL
> Problem: A scenario is already revealed. Should you multiply terminal outcomes by unconditional probabilities or by conditional probabilities inside that scenario?
> ---
> Use the conditional probabilities inside that scenario only. Then add the weighted outcomes to get $E(X|S)$.
> 
> **Takeaway:** once the scenario is known, unconditional weights are old news.

## Bayes' Formula

49. Bayes' formula flips the direction of conditioning. It uses observed information to update the probability of the underlying event or scenario.
50. What is Bayes' formula: a rational rule for turning prior beliefs into updated beliefs after new information arrives.
51. The compact formula is:

$$
P(\text{Event}|\text{Info})=\frac{P(\text{Info}|\text{Event})}{P(\text{Info})}P(\text{Event})
$$

52. Prior probability means your belief before the new information. Posterior probability means your belief after absorbing that information.
53. The likelihood is $P(\text{Info}|\text{Event})$. What is likelihood here: the probability of seeing the information if that event were truly the cause.
54. Before you can update, you need the unconditional probability of the information itself.
55. That unconditional probability is found using the total probability rule across all mutually exclusive and exhaustive events that could have generated the information.
56. If the likelihood is larger than the unconditional probability of the information, the posterior rises above the prior.
57. If the likelihood is smaller than the unconditional probability of the information, the posterior falls below the prior.
58. So Bayes is basically a rescaling device: prior times a ratio that measures how strongly the new information points toward that event.

## Bayes Workflow

59. Step 1: write the mutually exclusive and exhaustive events or scenarios.
60. Step 2: write prior probabilities for those events.
61. Step 3: write likelihoods, meaning probabilities of the new information given each event.
62. Step 4: calculate the unconditional probability of the information using the total probability rule.
63. Step 5: apply Bayes' formula to each event if needed.
64. Step 6: check that updated probabilities across the full event set sum to 1.
65. That last step is not optional. It is your fastest error detector on exam day.

> [!example] THE FACTORY ANNOUNCEMENT THAT CHANGED EVERYTHING
> Imagine a company suddenly announcing capacity expansion in Singapore and Ireland. The market hears steel, concrete, and optimism. But the Bayesian move is colder: ask how likely that announcement would be if earnings had beaten, met, or missed consensus. The poster-child excitement is not the answer. The likelihood structure is.

## Diffuse Priors

66. Sometimes the decision maker begins with equal prior probabilities across events. The source calls these diffuse priors.
67. When priors are equal, the information does most of the heavy lifting in the update.
68. In that special case, probability of information given event equals probability of event given information after the Bayes mechanics simplify in the source's example.
69. Intuition: if you started with no favorite among the causes, the observed information gets to dominate the ranking.

## Credit and Bankruptcy Applications

70. Bayes appears naturally in credit work because you keep observing signals like good credit reports, pass-fail tests, ratings, or screening models.
71. A good signal does not make repayment certain. It changes the conditional probability of repayment.
72. A bad test result does not prove bankruptcy. It updates the probability of non-survival upward.
73. This is why Bayes is useful in underwriting, distress analysis, bankruptcy screens, and any filter that emits noisy signals.
74. The test is useful if passing meaningfully raises survival probability and failing meaningfully raises non-survival probability.

## Final Exam Traps

75. Expected value is not the most likely outcome. It is the weighted average outcome.
76. Variance uses squared deviations, so always compute expected value first.
77. In tree questions, multiply down branches and add across terminal boxes.
78. Conditional expected value uses conditional probabilities, not unconditional terminal probabilities from the full tree.
79. Bayes needs the unconditional probability of the information in the denominator. Forgetting that step is the classic trap.
80. Updated probabilities for a full mutually exclusive and exhaustive event set must sum to 1. If they do not, your update is wrong.
