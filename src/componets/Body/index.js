import { artes } from "../../data"
import Card from "../Card"
import "./styles.css"

export default function Body(){

    return(
        <main>

          <div className="card-container">
            {
                artes.map((arte) => (
                  <Card key={arte.id} item={arte}  />
                ))
            }
          </div>
            
        </main>
    )


}