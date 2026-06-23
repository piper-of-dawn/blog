# Simple Linear Regression

**Learning outcomes**
- Describe a simple linear regression model, least squares estimation, and coefficient interpretation.
- Explain the four assumptions and use residual plots to spot violations.
- Calculate and interpret fit measures, coefficient tests, ANOVA output, forecasts, prediction intervals, and functional forms.

> [!tip] SEE THIS BEFORE EXAM
> **Core model**
> $$
> Y_i = b_0 + b_1 X_i + \varepsilon_i
> $$
> 
> $$
> \hat{Y}_i = \hat{b}_0 + \hat{b}_1 X_i
> $$
> 
> $$
> e_i = Y_i - \hat{Y}_i
> $$
> 
> **Slope and intercept**
> 
> $$
> \hat{b}_1 = \frac{\sum (Y_i-\bar{Y})(X_i-\bar{X})}{\sum (X_i-\bar{X})^2}
> $$
> 
> $$
> \hat{b}_0 = \bar{Y} - \hat{b}_1 \bar{X}
> $$
> 
> **Variation breakdown**
> 
> $$
> SST = SSR + SSE
> $$
> 
> $$
> R^2 = \frac{SSR}{SST} = r^2
> $$
> 
> $$
> F = \frac{MSR}{MSE}, \qquad MSE = \frac{SSE}{n-2}, \qquad s_e = \sqrt{MSE}
> $$
> 
> **Coefficient tests**
> 
> $$
> t_{\text{slope}} = \frac{\hat{b}_1 - B_1}{s_{\hat{b}_1}}
> $$
> 
> $$
> s_{\hat{b}_1} = \frac{s_e}{\sqrt{\sum (X_i-\bar{X})^2}}
> $$
> 
> $$
> t_{\text{corr}} = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}
> $$
> 
> $$
> t_{\text{intercept}} = \frac{\hat{b}_0-B_0}{s_{\hat{b}_0}}
> $$
> 
> $$
> s_{\hat{b}_0} = s_e \sqrt{\frac{1}{n} + \frac{\bar{X}^2}{\sum (X_i-\bar{X})^2}}
> $$
> 
> **Forecast and interval**
> 
> $$
> \hat{Y}_f = \hat{b}_0 + \hat{b}_1 X_f
> $$
> 
> $$
> s_f = s_e \sqrt{1 + \frac{1}{n} + \frac{(X_f-\bar{X})^2}{\sum (X_i-\bar{X})^2}}
> $$
> 
> $$
> \text{Prediction interval} = \hat{Y}_f \pm t_{\alpha/2} s_f
> $$
> 
> **Notation in simple language**
> - $Y$: dependent variable, the thing you want to explain.
> - $X$: independent variable, the thing you use to explain $Y$.
> - $b_0$: intercept, predicted $Y$ when $X=0$.
> - $b_1$: slope, change in $Y$ for a one-unit change in $X$.
> - $e_i$: residual, observed minus predicted.
> - $SST$: total variation in $Y$.
> - $SSR$: explained variation.
> - $SSE$: unexplained variation.
> - $s_e$: standard error of estimate, average distance from the line.
> - **ROA is regressed on CAPEX and $\hat{b}_1 = 1.25$. What does that mean?** Say it aloud: if CAPEX rises by one unit, predicted ROA rises by 1.25 units.
> - **You are given $SSR = 60$ and $SST = 150$. Find $R^2$.** Use the lazy shortcut: explained over total, so $60/150 = 0.40$.
> - **You are given $SSE = 48$ and $n = 10$. Find $MSE$.** Subtract two degrees of freedom first, then divide: $48/8 = 6$.
> - **You are given $\hat{Y}_f = 12$, $t = 2$, and $s_f = 1.5$. Find the prediction interval.** Just do center plus-minus spread: $12 \pm 3$, so 9 to 15.
> - **Residual plot bends like a curve. What should you suspect?** Suspect the linearity assumption broke first, so the straight line is forcing the wrong shape.
> - **Residuals split into quiet years and wild years. What should you suspect?** Think regime change and heteroskedasticity; the variance is not staying constant.

> [!abstract] MEMORISE
> - Simple linear regression uses one independent variable.
> - Least squares picks the line that minimizes squared residuals.
> - In simple regression, $R^2 = r^2$ and the test of slope zero gives $t^2 = F$.
> - Residual plots should look random, not curved, clustered, or seasonal.
> - Normality is about residuals, not about raw $X$ and $Y$.

## Core Idea

1. Simple linear regression asks one clean question: can variation in one variable help explain variation in another variable?
2. The variable being explained is the dependent variable. What is dependent variable: the output you are trying to understand or predict.
3. The variable doing the explaining is the independent variable. What is independent variable: the input you use to explain movements in the dependent variable.
4. If there is only one independent variable, the model is simple linear regression. If there are many, you have moved into multiple regression.
5. Regression helps in two ways. Why is regression used: to test whether a relationship exists and to use that relationship for prediction.
6. The straight-line model is:

$$
Y_i = b_0 + b_1 X_i + \varepsilon_i
$$

7. What is intercept: the predicted value of $Y$ when $X$ equals zero. This matters only if zero for $X$ is economically meaningful.
8. What is slope: the change in predicted $Y$ for a one-unit change in $X$. Positive slope means both move together; negative slope means they move opposite ways.
9. What is error term: the gap between observed $Y$ and the true population relationship. This is the part the line cannot perfectly explain.
10. What is residual: the gap between observed $Y$ and fitted $Y$ from the sample line. The error term belongs to the population; the residual belongs to your estimated sample line.
11. A scatter plot is your first truth serum. If the points already lean upward or downward, the line has a fighting chance.

> [!example] WHEN THE MARKET LOOKS ORDERLY UNTIL IT DOESN'T
> Picture the years after the 2008 crisis. Central banks crushed rates toward the floor, and old inflation-versus-rate relationships stopped behaving like they used to. An analyst who kept one calm straight line for both eras would watch the residuals split into two worlds. That is the chill here: the line did not fail loudly in the equation; it failed quietly in the plot.

## Estimating the Line

12. Least squares chooses the fitted line by minimizing the sum of squared residuals. Why is least squares used: it punishes large misses heavily, so the chosen line is the tightest straight-line fit.
13. The fitted value for observation $i$ is:

$$
\hat{Y}_i = \hat{b}_0 + \hat{b}_1 X_i
$$

14. The residual for observation $i$ is:

$$
e_i = Y_i - \hat{Y}_i
$$

15. Residuals are vertical distances from observed points to the fitted line, so they are measured in the same units as the dependent variable.
16. The least-squares objective is:

$$
SSE = \sum (Y_i-\hat{Y}_i)^2
$$

17. What is SSE: sum of squares error, the part of variation the line still fails to explain after fitting.
18. The slope estimate is covariance over variation in $X$:

$$
\hat{b}_1 = \frac{\sum (Y_i-\bar{Y})(X_i-\bar{X})}{\sum (X_i-\bar{X})^2}
$$

19. Why is this formula built this way: the numerator asks whether $X$ and $Y$ move together, and the denominator scales that co-movement by how much $X$ itself varies.
20. The intercept estimate is:

$$
\hat{b}_0 = \bar{Y} - \hat{b}_1 \bar{X}
$$

21. The fitted line always passes through the sample means. Casual shortcut: if you plug in $\bar{X}$, you get $\bar{Y}$.
22. The sample correlation and slope share the same numerator, so covariance decides both signs. Positive covariance gives positive slope and positive correlation.
23. In simple regression, the sum of residuals is zero by construction. The line balances the misses above and below itself.
24. Cross-sectional regression uses many entities at one time. Time-series regression uses one entity across many dates. Same machinery, different data layout.

## Assumptions

25. Four assumptions carry the model: linearity, homoskedasticity, independence, and normality.
26. Linearity means the true relationship between $X$ and $Y$ is linear in the parameters. What is linearity: the straight-line form is genuinely appropriate.
27. If the real relationship is curved but you force a line, the model underestimates in some zones and overestimates in others. That is bias, not bad luck.
28. A residual plot against $X$ should look random. If it bends like a smile or a bowl, the line is missing the shape.
29. The source also warns that the independent variable should not be random. Why is non-random $X$ used: the model treats $X$ as the anchor used to explain $Y$.
30. Homoskedasticity means residual variance stays constant across observations. What is homoskedasticity: the misses are equally noisy across the sample.
31. If residual variance changes across observations, you have heteroskedasticity. Think of one calm regime and one chaotic regime stitched into one dataset.
32. Residuals clustering into groups with very different widths is a visual red flag for heteroskedasticity and possibly multiple regimes.
33. Independence means observation pairs are uncorrelated with one another. What is independence: today's miss should not mechanically predict tomorrow's miss.
34. In time series, seasonality often breaks independence. Residuals that jump every fourth quarter are basically waving a flag saying, "you ignored a pattern."
35. Normality means residuals are normally distributed. What is normality: the misses around the line form a bell-shaped distribution.
36. Normality is about residuals, not the raw data. The data themselves do not have to be normally distributed.
37. Non-normal residuals matter more in small samples. In large samples, the central limit theorem can make the usual test statistics more usable.
38. Outliers in either $X$ or $Y$ can yank the line around. One dirty data point can fake a beautiful $R^2$ and still make the model less trustworthy.

> [!warning] RESIDUAL PLOT TRAP
> Do not stare only at the regression line and its equation. The source keeps pushing the same habit: inspect residual plots. A model can look respectable in the scatter plot and still fail through curvature, clustering, seasonality, or ugly tails.

> [!example] THE QUARTER THAT REFUSES TO BE ORDINARY
> Imagine a retailer marching through the year. Q1 breathes, Q2 builds, Q3 waits, and then Q4 explodes when holidays hit. If you regress revenue on time and ignore seasonality, the line looks calm, but every fourth residual leaps upward like a recurring jump scare. That repeated pulse is autocorrelation wearing a mask.

## Breaking Down Variation

39. Regression tries to explain total variation in $Y$, called sum of squares total:

$$
SST = \sum (Y_i-\bar{Y})^2
$$

40. The explained part is sum of squares regression:

$$
SSR = \sum (\hat{Y}_i-\bar{Y})^2
$$

41. The unexplained part is sum of squares error:

$$
SSE = \sum (Y_i-\hat{Y}_i)^2
$$

42. The whole decomposition is:

$$
SST = SSR + SSE
$$

43. This identity is the emotional core of regression: total mess equals explained mess plus leftover mess.
44. A good model pushes more variation into $SSR$ and leaves less sitting in $SSE$.

## Goodness of Fit and Tests

45. The coefficient of determination is:

$$
R^2 = \frac{SSR}{SST}
$$

46. What is $R^2$: the percentage of dependent-variable variation explained by the independent variable. Higher means more explained, not automatically better economics.
47. In simple linear regression only, $R^2 = r^2$. That shortcut dies once you leave the one-$X$ world.
48. The F-test asks whether the slope is zero. In simple regression:

$$
H_0: b_1 = 0 \qquad \text{vs} \qquad H_a: b_1 \neq 0
$$

49. The mean square regression is $MSR = SSR/1$, and the mean square error is $MSE = SSE/(n-2)$. One slope and one intercept already consumed two degrees of freedom.
50. The test statistic is:

$$
F = \frac{MSR}{MSE}
$$

51. The F-test is right-tailed. Why is F one-sided: you care whether explained variation is large relative to unexplained variation.
52. The standard error of estimate is:

$$
s_e = \sqrt{MSE}
$$

53. What is standard error of estimate: the typical distance between actual $Y$ values and fitted $Y$ values. Smaller means the line hugs the data more tightly.
54. To test a slope against any hypothesized value $B_1$, use:

$$
t = \frac{\hat{b}_1-B_1}{s_{\hat{b}_1}}
$$

55. The slope standard error is:

$$
s_{\hat{b}_1} = \frac{s_e}{\sqrt{\sum (X_i-\bar{X})^2}}
$$

56. More variation in $X$ lowers the slope's standard error. Intuition: when $X$ spreads out nicely, the slope has more room to reveal itself.
57. To test whether correlation is zero, use:

$$
t = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}
$$

58. In simple regression, the slope-zero test and the correlation-zero test give the same t-statistic. Also, for slope-zero tests, $t^2 = F$.
59. The intercept can also be tested. Be careful, though: intercept interpretation can be useless when $X=0$ is economically impossible.
60. The p-value is the smallest significance level at which you reject the null. Smaller p-value means stronger evidence against the null, not bigger economic importance.

## Indicator Variable Case

61. An indicator variable takes only 0 or 1. What is indicator variable: a switch showing whether a condition is absent or present.
62. If $X$ is an indicator, the intercept is the mean of the zero group, and the slope is the difference in means between the one group and the zero group.
63. This is just regression wearing a very practical costume. You are testing whether two group averages differ, but through the regression framework.

## ANOVA, Forecasting, and Prediction Intervals

64. The ANOVA table organizes sums of squares, degrees of freedom, mean squares, and the F-statistic in one place.
65. In simple regression, ANOVA is not decoration. It is the machine room where you read fit, error size, and the ingredients for later tests.
66. A forecasted dependent value is:

$$
\hat{Y}_f = \hat{b}_0 + \hat{b}_1 X_f
$$

67. This gives the line's best predicted value, not a guaranteed realized value. Real observations still wander around the line.
68. That is why you need the standard error of forecast:

$$
s_f = s_e \sqrt{1 + \frac{1}{n} + \frac{(X_f-\bar{X})^2}{\sum (X_i-\bar{X})^2}}

$$
69. Forecast uncertainty rises when $s_e$ is high, sample size is small, or the forecasted $X_f$ sits far from the sample mean $\bar{X}$.
70. The prediction interval is:

$$
\hat{Y}_f \pm t_{\alpha/2} s_f
$$

71. Why is the interval wider far from $\bar{X}$: you are extrapolating toward the edges, where the line has less support from the data.
72. If two models give the same fitted value but one has lower $s_f$, that lower-$s_f$ model gives the tighter and more useful prediction interval.

## Functional Forms

73. Not every relationship is naturally linear. Sometimes the rescue move is not a new theory but a transformation.
74. A log-lin model logs the dependent variable only:

$$
\ln Y_i = b_0 + b_1 X_i
$$

75. In log-lin, the slope measures the relative change in $Y$ for an absolute change in $X$. You must antilog forecasts to get back to plain $Y$.
76. A lin-log model logs the independent variable only:

$$
Y_i = b_0 + b_1 \ln X_i
$$

77. In lin-log, the slope measures the absolute change in $Y$ for a relative change in $X$.
78. A log-log model logs both variables:

$$
\ln Y_i = b_0 + b_1 \ln X_i
$$

79. In log-log, the slope is elasticity. What is elasticity here: the relative change in $Y$ for a relative change in $X$.
80. The correct functional form is chosen by fit measures and residual behavior together. Never marry a higher $R^2$ if the residuals still look suspicious.

> [!example] WHEN AD SPEND SUDDENLY SPEAKS A DIFFERENT LANGUAGE
> Think of a fast-growing consumer brand pouring money into advertising. At first, plain dollars spent versus revenue looks disappointingly shallow. Then you log both sides and the fog lifts: percentage moves in advertising line up with percentage moves in revenue. The relationship was always there. You were just listening in the wrong units.

## Final Exam Traps

81. If residuals are random, that is a good sign. If residuals show shape, grouping, or rhythm, the model is talking back and saying something is wrong.
82. Do not confuse residuals with error terms, $R^2$ with significance, or a fitted value with a prediction interval.
83. If the intercept makes no economic sense, say so directly. The formula still exists even when the story at $X=0$ is nonsense.
84. In simple regression, the exam loves these identities: $R^2 = r^2$ and, for testing slope equal to zero, $t^2 = F$.
