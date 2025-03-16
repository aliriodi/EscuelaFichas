import React from "react";
import Image from "next/image";

const students = [
  { id: 1, name: "Juan Manuel Cerúndolo", dni: "12345678", birthdate: "2005-08-15", photo: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0301%2Fr821016_1024x576_16%2D9.jpg&w=1140&cquality=40&format=jpg" },
  { id: 2, name: "María López", dni: "87654321", birthdate: "2008-03-22", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1717139295/forex/forex_academy_professional_estudiando_421.jpg" },
  { id: 3, name: "Pablo Gómez", dni: "45678912", birthdate: "2003-11-10", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1742144419/forex/forex_academy_professional_pablo-tenisinstruictr.jpg" },
  { id: 4, name: "Pedro Fernández", dni: "15975346", birthdate: "2006-02-18", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1742144576/forex/forex_academy_professional_anatorres.jpg" },
  { id: 5, name: "Guillermo Coria", dni: "65432187", birthdate: "2005-12-03", photo: "https://www.argentina.gob.ar/sites/default/files/gq8c5uuwgaaprr8.jpg" },
  { id: 6, name: "Julia Riera", dni: "98745632", birthdate: "2002-06-25", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1742145337/forex/JuliaRiera_s0zsxr.jpg" },
  { id: 7, name: "Tomas Etcheverry", dni: "65498721", birthdate: "2010-01-08", photo: "https://www.clarin.com/img/2021/03/23/g2-Ex8QbM_720x0__1.jpg" },
];

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
        {students.map((student) => (
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
        ))}
      </div>
    </div>
  );
}
