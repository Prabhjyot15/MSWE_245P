import  {Research}  from "../Research";
import ResearchComp from "./ResearchComp";

const PartTimeView = () => {
    let researchData = [new Research("Alzheimer's Research | San Jose", "Research on now Alzheimer's stages develop",
        "https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/symptoms-causes/syc-20350447"),

    new Research("Cyber Security in Daily Life | Irvine", "Review use cases of cyber-security and now it can be implemented efficiently",
        "https://www.reuters.com/technology/siemens-ericsson-warn-eu-cybersecurity-rules-may-disrupt-supply-chains-2023-11-06/"),

    new Research("Research on Application bundling to lower latency | San Jose", "Research on Bundling to resolving your applications dependency graph and reducing the number of files.",
        "https://nextjs.org/learn-pages-router/foundations/how-nextjs-works/bundling")]

    return (
        <>
            <div>
                <h3>Summer 2024 Research Opportunities:</h3>
            </div>
            <div style={{ width: '300px', margin: 'auto' }}>
                <div>
                    {researchData.map(data =>
                        <ResearchComp child={data} />
                    )}
                </div>

            </div>
        </>
    )
}

export default PartTimeView;