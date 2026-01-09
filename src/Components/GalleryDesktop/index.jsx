import "./styles.scss"

import feedback1 from "../../assets/images/feedback1.jpeg"
import feedback2 from "../../assets/images/feedback2.jpeg"
import feedback3 from "../../assets/images/feedback3.jpeg"
import feedback4 from "../../assets/images/feedback6.jpeg"
import feedback5 from "../../assets/images/feedback7.jpeg"
import feedback6 from "../../assets/images/feedback8.jpeg"
import feedback7 from "../../assets/images/feedback11.jpg"
import feedback8 from "../../assets/images/feedback7.jpeg"
import feedback9 from "../../assets/images/feedback4.jpeg"
import feedback10 from "../../assets/images/feedback10.jpeg"

export default function GlleryDesktop() {

    return (
        <div>
            <div id="gallery-desktop" className="d-flex row p-4 justify-content-center">
                <div className="d-flex col-4 bg-warning justify-content-center align-items-center">
                    <img src={feedback1} alt="feedback" className="img-fluid"/>
                </div>
                <div className="col-8 row p-0 h-fit">
                    <div className="w-100 bg-danger col-12 h-fit" id="line-one">
                        <div className="row h-100">
                            <div className="col-4 p-0">
                                <img src={feedback2} alt="" className="img-fluid"/></div>
                            <div className="col-4 p-0">
                                <img src={feedback3} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-4 p-0">
                                <img src={feedback4} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 bg-secondary col-12 h-fit row p-0 m-0" id="line-two">
                        <div className="col-6 w-50 row p-0 m-0">
                            <div className="col-12 w-100 bg-primary">
                                <div className="row">
                                    <div className="col-6 p-0">
                                        <img src={feedback5} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-6 p-0">
                                        <img src={feedback6} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 w-100 bg-success p-0">
                                <img src={feedback9} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-6 w-50 row p-0 m-0">
                            <div className="col-12 bg-success h-fit">
                                <div className="row p-0">
                                    <div className="col-6 p-0">
                                        <img src={feedback7} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-6 p-0">
                                        <img src={feedback8} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 bg-primary p-0">
                                <img src={feedback10} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
