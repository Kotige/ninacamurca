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
        <>
            <div className="gallery p-3">
                <div className="row">
                    <div className="col-4">
                        <div className="h-100 overflow-hidden">
                            <img src={feedback1} alt="" className="img-fluid d-block"/>
                        </div>
                    </div>
                    <div className="col-8">2</div>
                </div>
            </div>
        </>
    )
}
