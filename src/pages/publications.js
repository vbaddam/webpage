import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"


import "../styles/publications.scss"
import "../styles/include-media.scss"


const Publications = () => {
    return (
        <div className="section">
            <div className="container">
            <span>
          <a href = '/'>Home</a>
          </span>
                <Fade top>
                <h1>Publications</h1>
                </Fade>
                <div className="publications">
                    <div classsName="row">
                        <div className="publication">
                        <table class='noBorder'>
    <tbody class='noBorder'>
        <tr class='noBorder'>
            <td class='noBorderimg'>
                <div>
                    <img className="image-wrapper" src={data.hri} alt="Vasanth" />
                </div>
            </td>
            <td class='noBorderdetails'>
                <h4>
                    <a href="https://arxiv.org/pdf/2011.07126.pdf">
                        In Search of a Lost Metric: Human Empowerment as a Pillar of Socially Conscious Navigation
                    </a>
                </h4>
                <span>HRI'25 (Human-Robot Interaction)</span>
                <div>
                    <span>Summary: </span>
                    Introducing human empowerment, an information-theoretic concept, as a novel metric for evaluating social compliance in robot navigation.
                    <br />
                    <span>
                        [<a href="https://arxiv.org/abs/2501.01539">Paper</a>]
                    </span>
                    <br />
                    This work leverages the concept of human empowerment to assess a human’s ability to influence their future states in shared spaces. The metric complements traditional measures like proxemics by offering insights into the nuanced effects of robot policies on human autonomy. A framework is presented for integrating empowerment into social navigation tasks, validated through simulations that compare navigation methods, including ORCA, SARL, and SAC. Key contributions include:
                    <ul>
                        <li>Framework for incorporating empowerment into social navigation evaluation.</li>
                        <li>Statistical validation of empowerment differences across policies.</li>
                        <li>Insights into the dynamic impact of robot navigation on human autonomy.</li>
                    </ul>
                    Simulation results highlight empowerment’s role in evaluating social compliance, providing a foundation for designing socially-aware robot behaviors.
                </div>
            </td>
        </tr>
    </tbody>
</table>
                            <hr/>
                            <table class='noBorder'>
    <tbody class='noBorder'>
        <tr class='noBorder'>
            <td class='noBorderimg'>
                <div>
                    <img className="image-wrapper" src={data.bun} alt="Vasanth" />
                </div>
            </td>
            <td class='noBorderdetails'>
                <h4>
                    <a href="https://arxiv.org/pdf/2025.07126.pdf">
                        Learning Emergence of Interaction Patterns Across Independent RL Agents in Multi-Agent Environments
                    </a>
                </h4>
                <span>Arxiv Submission</span>
                <div>
                    <span>Summary:</span>
                    A novel approach for scalable multi-agent reinforcement learning (MARL) using the Bottom-Up Network (BUN).
                    <br />
                    <span>
                        [<a href="https://arxiv.org/pdf/2410.02516">Paper</a>]
                    </span>
                    <br />
                    This work introduces the Bottom-Up Network (BUN), a sparse neural network designed to address the computational challenges of MARL. By adopting a unique block-diagonal weight initialization strategy and dynamic weight emergence based on gradient information, BUN achieves efficient communication and coordination among agents. The approach is validated in cooperative scenarios, such as:
                    <ul>
                        <li>Cooperative Navigation: Agents achieve their objectives with minimal communication.</li>
                        <li>Traffic Signal Control: BUN optimizes traffic flow using fewer resources compared to dense models.</li>
                    </ul>
                    **Key Contributions:**
                    <ul>
                        <li>Sparse network initialization to promote localized decision-making.</li>
                        <li>Dynamic weight emergence to enable adaptive communication among agents.</li>
                        <li>Extensive validation demonstrating superior performance and scalability in large-scale environments.</li>
                    </ul>
                    Experiments highlight the efficiency of BUN in reducing floating-point operations (FLOPs) while achieving comparable or better performance than centralized methods. The robustness of BUN under noisy observations further underscores its potential for real-world applications.
                </div>
            </td>
        </tr>
    </tbody>
</table>
                            <hr/>
                            <table class='noBorder'>
    <tbody class='noBorder'>
        <tr class='noBorder'>
            <td class='noBorderimg'>
                <div>
                    <img className="image-wrapper" src={data.accs} alt="Vasanth" />
                </div>
            </td>
            <td class='noBorderdetails'>
                <h4>
                    <a href="https://arxiv.org/pdf/2011.07126.pdf">
                        A Bottom-Up Approach for Sparse Controller Design with a Budget
                    </a>
                </h4>
                <span>ACC'24 (American Control Conference)</span>
                <div>
                    <span>Summary: </span>
                    Optimizing sparse static output-feedback controllers for large-scale systems using a budgeted bottom-up approach.
                    <br />
                    <span>
                        [<a href="https://ieeexplore.ieee.org/abstract/document/10644330">Paper</a>]
                    </span>
                    <span>
                        [<a href="https://git.cs.vt.edu/machine-learning-lab/vasanth-repo/sparse-controller">Code</a>]
                    </span>
                    <br />
                    This work introduces a novel gradient-based bottom-up approach for designing sparse controllers in distributed systems, addressing computational inefficiencies in traditional top-down methods. Key contributions include:
                    <ul>
                        <li>A greedy gradient search for selecting optimal communication links within a predefined parameter budget.</li>
                        <li>Scalable and efficient structured controller tuning to ensure near-optimal performance with minimal computational overhead.</li>
                        <li>Validation across benchmark examples, showcasing reduced computational costs and improved scalability compared to existing methods.</li>
                    </ul>
                    The approach demonstrates effective performance in large-scale systems such as power grids, structural systems, and mass-spring models, achieving significant reductions in tuning complexity while maintaining control efficiency.
                </div>
            </td>
        </tr>
    </tbody>
</table>
<hr/>
                            <table class = 'noBorder'>
                                <tbody class='noBorder'>
                                    <tr class='noBorder'>
                                        <td class='noBorderimg'>
                                            <div >
                                                <img className="image-wrapper" src={data.acc} alt="Vasanth" />
                                            </div>
                                        </td>
                                        <td class='noBorderdetails'>
                                            <h4>
                                                <a href="https://arxiv.org/pdf/2011.07126.pdf">
                                                Singular Perturbation-based Reinforcement Learning of Two-Point Boundary Optimal Control Systems
                                                </a>
                                            </h4>
                                            <span>ACC'22 (American Control Conference)</span>
                                            <div>
                                                <span>Summary:  </span>
                                                 Optimal control of two-point boundary systems. 
                                                <br/>
                                                <span>
                                                    [
                                                    <a href="https://arxiv.org/pdf/2104.09652.pdf">Paper</a>
                                                    ]
                                                </span> <span>
                                                    [
                                                    <a href="https://git.cs.vt.edu/machine-learning-lab/vasanth-repo/ltv-sp">Code</a>
                                                    ]
                                                </span>
                                                <br/>
                                                We solve the problem of two-point boundary opti-
mal control of linear time-varying systems with unknown model
dynamics using reinforcement learning. Leveraging singular
perturbation theory techniques, we transform the time-varying
optimal control problem into two time-invariant subproblems.
This allows the utilization of an off-policy iteration method to
learn the controller gains. We show that the performance of the
learning-based controller approximates that of the model-based
optimal controller and the approximation accuracy improves as
the control problem’s time horizon increases. We also provide
a simulation example to verify the results
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <table class = 'noBorder'>
                                <tbody class='noBorder'>
                                    <tr class='noBorder'>
                                        <td class='noBorderimg'>
                                            <div >
                                                <img className="image-wrapper" src={data.aaai} alt="Vasanth" />
                                            </div>
                                        </td>
                                        <td class='noBorderdetails'>
                                            <h4>
                                                <a href="https://arxiv.org/pdf/2011.07126.pdf">
                                                Cooperation Learning in Time-Varying Multi-Agent Networks
                                                </a>
                                            </h4>
                                            <span>AAAI Workshop on Reinforcement Learning in Games (AAAI-RLG) 2022</span>
                                            <div>
                                                <span>Summary:  </span>
                                                 Learning cooperation strategies in time-varying multi-agent networks. 
                                                <br/>
                                                <span>
                                                    [
                                                    <a href="http://aaai-rlg.mlanctot.info/papers/AAAI22-RLG_paper_10.pdf">Paper</a>
                                                    ]
                                                </span>
                                                <span>
                                                    [
                                                    <a href="https://git.cs.vt.edu/machine-learning-lab/vasanth-repo/coolman">Code</a>
                                                    ]
                                                </span>
                                                <br/>
                                                We propose a Multi-Agent Systems coordination framework
for complex and dynamic environments, where agents’ neighbors vary over time. We consider an agent-agent communication network, where we represent time-varying interactions as
weighted network edges, and propose a heat kernel mechanism
to compute those time-varying edge weights. We represent
our network as a graph and build a heat diffusion kernel using
the graph Laplacian. The key idea of our proposed approach
is to model time-varying edge weights using the heat diffusion approach. Our proposed approach Cooperation Learner
in MultiAgent Networks (CooLMAN) has a number of features: (1) it captures information flow in a dynamic environment using temporal indexing, (2) agents can achieve optimal
policy and stability by the system-enabled timed interaction
and coordination, thereby (3) providing trained weights that
can be deployed to larger swarms in a scalable manner. We
demonstrate the effectiveness of our proposed method using a
cooperation task, where our model significantly outperforms
state-of-the-art method.
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <table class = 'noBorder'>
                                <tbody class='noBorder'>
                                    <tr class='noBorder'>
                                        <td class='noBorderimg'>
                                            <div >
                                                <img className="image-wrapper" src={data.markov} alt="Vasanth" />
                                            </div>
                                        </td>
                                        <td class='noBorderdetails'>
                                            <h4>
                                                <a href="https://ieeexplore.ieee.org/abstract/document/8521645">
                                                Hybrid Approach for Short Term Wind Power Forecasting
                                                </a>
                                            </h4>
                                            <span> 2018 9th International Conference on Computing, Communication and Networking Technologies (ICCCNT)</span>
                                            <div>
                                                <span>Summary:  </span>
                                                 Prediction of wind speed using Hybrid Model.
                                                <br/>
                                                <span>
                                                    [
                                                    <a href="https://drive.google.com/file/d/14-C2zob9FUyuUo_o1y2svj6KC27EgEWv/view?usp=sharing">Paper</a>
                                                    ]
                                                </span>
                                                <span>
                                                    [
                                                    <a href="https://github.com/vbaddam/wind-forecasting/tree/master/Wavelet">Paper</a>
                                                    ]
                                                </span>
                                                <br/>
                                                Wind is one of the most important parts of renewable energy sources and optimal scheduling of wind power in wind farms is essential. Therefore, accurate prediction is a necessary task to be done in order to have a clear picture of how this wind energy can be utilized to its maximum potential. In this paper, wind speed is forecasted using it as a signal for wavelet transformation and the coefficients are predicted to obtain the forecasted wind speeds. The geographical location under study is taken at Jodhpur in Rajasthan, India. The performance evaluation of the proposed method is calculated using the different statistical error measures like RMSE, MAPE and MAE.
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <table class = 'noBorder'>
                                <tbody class='noBorder'>
                                    <tr class='noBorder'>
                                        <td class='noBorderimg'>
                                            <div >
                                                <img className="image-wrapper" src={data.markov} alt="Vasanth" />
                                            </div>
                                        </td>
                                        <td class='noBorderdetails'>
                                            <h4>
                                                <a href="https://ieeexplore.ieee.org/abstract/document/8521645">
                                                Markov models based short term forecasting of wind speed for estimating day-ahead wind power
                                                </a>
                                            </h4>
                                            <span>2018 International Conference on Power, Energy, Control and Transmission Systems (ICPECTS)</span>
                                            <div>
                                                <span>Summary:  </span>
                                                 Prediction of wind speed using Markov models.
                                                <br/>
                                                <span>
                                                    [
                                                    <a href="https://drive.google.com/file/d/1LXJc4_JHp9kVL4ipM5Mu4fDvP3X2ixwC/view?usp=sharing">Paper</a>
                                                    ]
                                                </span>
                                                <span>
                                                    [
                                                    <a href="https://github.com/vbaddam/wind-forecasting/tree/master/Markov%20Chain">Code</a>
                                                    ]
                                                </span>
                                                <br/>
                                                In order to meet the growing demand of energy, renewable resource utilization has increased in recent years. Wind is the source to a significant percentage of renewable resources and wind farms harvest this energy into electricity with the help of wind turbines. These turbines are very costly to set up and require high amount of maintenance. Accurate short term (from 30 minutes up to 6 hours ahead) wind energy forecasting is therefore important for optimal scheduling of the wind farms. The paper explores the usage of Markov Chains for forecasting wind speed during a short-term period (day-ahead hourly wind generation forecasts for an individual wind farm). The proposed prediction model depends on one variable factor - wind speed, for a specific wind turbine.
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Publications