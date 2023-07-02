import React from "react";
import "./PlanScreen.css"

function PlanScreen() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     db.collection("products").where("active", "=", true).get().then(querySnapshot => {
    //         const products = {};
    //         querySnapshot.forEach(async productDoc => {

    //         })
    //     }
    // }, [])


  return (
    <div className='planScreen'>

        <div className="planScreen_plan">
            <div className="planScreen_info">
                <h4>Basic</h4>
                <h5>720p</h5>
            </div>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default PlanScreen