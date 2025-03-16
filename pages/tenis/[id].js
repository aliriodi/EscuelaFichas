import { React, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";

function CardDetail() {
    const router = useRouter();
    const { id } = router.query; // 🔹 Obtiene el ID de la URL
    const [studentDetail, setstudentDetailDetail] = useState();
    const studentDetails = [
        { id: 0, name: "Alirio Diaz", dni: "96011190", birthdate: "1979-09-03", photo: "https://res.cloudinary.com/dfddh08q8/image/upload/s--lPJjKAcw--/v1700682516/images/qrpdve99ldgodwftz5lu.png", gender:'Masculino', health:'Diabetico Tipo I', medicaments:"Insulina tipo Novorapid y Glarguina",emergency:"351-5913974", phone:"351-6132710", address:"Antonio del Viso 980 depto 1C"},
        { id: 1, name: "Juan Manuel Cerúndolo", dni: "12345678", birthdate: "2005-08-15", photo: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0301%2Fr821016_1024x576_16%2D9.jpg&w=1140&cquality=40&format=jpg" },
        { id: 2, name: "María López", dni: "87654321", birthdate: "2008-03-22", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1717139295/forex/forex_academy_professional_estudiando_421.jpg" },
        { id: 3, name: "Pablo Gómez", dni: "45678912", birthdate: "2003-11-10", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1742144419/forex/forex_academy_professional_pablo-tenisinstruictr.jpg" },
        { id: 4, name: "Pedro Fernández", dni: "15975346", birthdate: "2006-02-18", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1742144576/forex/forex_academy_professional_anatorres.jpg" },
        { id: 5, name: "Guillermo Coria", dni: "65432187", birthdate: "2005-12-03", photo: "https://www.argentina.gob.ar/sites/default/files/gq8c5uuwgaaprr8.jpg" },
        { id: 6, name: "Julia Riera", dni: "98745632", birthdate: "2002-06-25", photo: "https://res.cloudinary.com/dvy9qircy/image/upload/v1742145337/forex/JuliaRiera_s0zsxr.jpg" },
        { id: 7, name: "Tomas Etcheverry", dni: "65498721", birthdate: "2010-01-08", photo: "https://www.clarin.com/img/2021/03/23/g2-Ex8QbM_720x0__1.jpg" },
    ];

    useEffect(() => {
        if (!id) return; // Evitar errores antes de que cargue el ID
        // Buscar estudiante por ID
        const foundstudentDetail = studentDetails.find(studentDetail => studentDetail.id == id);
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