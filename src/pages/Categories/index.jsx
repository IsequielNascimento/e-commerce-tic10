import { Link } from "react-router-dom";
import CardCategory from "../../components/CardCategory"

export default function Categories(){
    return(
        <section className=" w-screen mb-20 mt-20 flex justify-center">
      <div className="w-[90vw]">
        <div className="flex flex-wrap items-center w-full gap-4 md:gap-5 justify-center ">
          <CardCategory categoryName={"SmartWatch"} imagePath={" src/assets/images/SmartWatch.jpeg"} />
          <CardCategory categoryName={"Tenis"} imagePath={"../src/assets/images/tenis.png"} />
          <CardCategory categoryName={"Tenis"} imagePath={"../src/assets/images/tenis.png"} />
        </div>
      </div>
    </section>
    )
}