import { SvgContent } from "@/components/common/icons";
import Pug from "@/components/icons/Pug";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habilidades",
}


const Skills = () => {
  return (
    <main className="flex flex-col items-center pb-6">
      <h1 className="text-5xl font-bold text-center h-full mt-5"> Habilidades </h1>
      
      <div className="grid gap-10 mt-5 md:grid-cols-6 grid-cols-3">
          {
            SvgContent.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <p className="text-center font-bold"> {item.name} </p>
              </div>
            )
            )
          }
      </div>

      <Pug
        className="w-10 h-10"
      />


    </main>
  )
}

export default Skills;