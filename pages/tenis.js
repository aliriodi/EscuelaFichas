import React from "react";
import Image from "next/image";
import Link from "next/link";

const students = require('../public/doc.json');

// Función para calcular edad
const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export default function Tenis() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">Lista de Alumnos de Tenis</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {students.students.map((student) => (
             <Link key={student.id} href={'/tenis/'+student.id} className="">
          <div key={student.id} className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          
            <Image
              src={student.photo}
              width={80}
              height={80}
              alt={student.name}
              className="w-20 h-20 object-cover rounded-full border-2 border-orange-600"
            />
            <div>
              <h2 className="text-lg font-semibold text-orange-600">{student.name}</h2>
              <p className="text-gray-600 text-sm">DNI: {student.dni}</p>
              <p className="text-gray-600 text-sm">Edad: {calculateAge(student.birthdate)} años</p>
            </div>
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
