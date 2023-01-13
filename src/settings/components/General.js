import Community from "./general/Community";
import Contribute from "./general/Contribute";
import Docs from "./general/Docs";
import Support from "./general/Support";
import Product from "./sidebar/Product";


const General = () => {
    return (
        <>
            <div className="row wpb-admin-general-wrapper">
                    <div className="wpb-admin-general-inner">
                        <div className="wpb-admin-block-wrapper">
                            <Docs />
                            <Contribute />
                            <Support />
                            <Community />
                            
                        </div>

                    </div>
                    <div className="wpb-admin-sidebar">
                        <Product />
                    </div>

                </div>
        </>
    )
}

export default General;