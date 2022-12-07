import ciro from "../../assets/images/ciro1.jpg"
import cris from "../../assets/images/cristianpinto.jpg"

const Festival = () => {
    return (
        <section className="container-fluid">
            <div className="row g-0">
                <div className="col-sm">
                    <img src={ciro} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm">
                    <img src={cris} alt='ciro' className="w-100"/>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-sm">
                    <img src={cris} alt='ciro' className="w-100"/>
                </div>
                <div className="col-sm">
                    <img src={ciro} alt='ciro' className="w-100"/>
                </div>
            </div>

        </section>
    )
}

export default Festival
