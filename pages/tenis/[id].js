import { React, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
const students = require('../../public/doc.json');
function CardDetail() {
    const router = useRouter();
    const { id } = router.query; // 🔹 Obtiene el ID de la URL
    const [studentDetail, setstudentDetailDetail] = useState();
    
    useEffect(() => {
        if (!id) return; // Evitar errores antes de que cargue el ID
        // Buscar estudiante por ID
        const foundstudentDetail = students.students.find(studentDetail => studentDetail.id == id);
        setstudentDetailDetail(foundstudentDetail);
    }, [id]); // Se ejecuta cada vez que cambia el ID

    return (
        <div>
            Detalle del Estudiante
            {/* <h1>{id}</h1> */}
            <div className="max-w-lg mx-auto bg-white border rounded-xl shadow-lg p-6">
                <div className='flex flex-col items-center '>
                <Image width='100' height='100' src={studentDetail?.photo} alt={studentDetail?.name} className="w-50 h-50 object-cover rounded-md" /></div>
                <h2 className="text-gray-600 text-xl font-bold mt-2">{studentDetail?.name}</h2>
                <p className="text-gray-600"><b>DNI:</b> {studentDetail?.dni}</p>
                <p className="text-gray-600"><b>Nacimiento:</b> {studentDetail?.birthdate}</p>
                <p className="text-gray-600"><b>Sexo:</b> {studentDetail?.gender}</p>
                <p className="text-gray-600"><b>Condicion de salud:</b> {studentDetail?.health}</p>
                <p className="text-gray-600"><b>Tratamiento:</b> {studentDetail?.medicaments}</p>
                <p className="text-gray-600"><b>Num Emergencia:</b> {studentDetail?.emergency}</p>
                <p className="text-gray-600"><b>Num Normal:</b> {studentDetail?.phone}</p>
                <p className="text-gray-600"><b>Dirección:</b> {studentDetail?.address}</p>
            </div>

        </div>
    )
}

export default CardDetail