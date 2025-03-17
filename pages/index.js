import Image from "next/image";
import Link from "next/link";

export default function CourseCards() {
 const courses = [
   {
     id: 1,
     name: "ESCUELA DE TENIS",
     description: "Escuela de Tenis de Rieles",
     icon:"🎾",
     students:"8",
     image: "https://plus.unsplash.com/premium_photo-1666913667081-1d6c8ccb5143?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     link: "/tenis",
   },
   {
     id: 2,
     name: "ESCUELA DE FUTBOL",
     description: "Escuela de Futbol de Rieles",
     icon:"⚽️",
     students: 85,
     image: "https://plus.unsplash.com/premium_photo-1684446464405-71867f88356b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     link: "/futbol",
   },
 ];

 return (
   <div className="flex flex-col md:flex-row gap-4 p-4">
        
     {/* <div>Hola</div> */}
     {courses.map((course) => (
        
       <div key={course.id} className="bg-white  rounded-2xl p-4 w-full md:w-1/2  hover:shadow-[4px_12px_15px_0px_#efa70c]">
          
          <Link key={course.id} href={course.link} className="w-full md:w-1/2 ">
         <Image src={course.image} width='100' height='100' alt={course.name} className="w-full h-40 object-cover rounded-lg text-orange-500" />
         <h2 className="text-lg text-orange-600 font-semibold mt-3">{course.name}</h2>
         <p className="text-orange-600 text-sm">{course.description}</p>
         <p className="mt-2 text-sm text-orange-500">{course.icon} {course.students} alumnos</p>
         </Link>
        
         </div>
       
     ))}
   </div>
 );
}
