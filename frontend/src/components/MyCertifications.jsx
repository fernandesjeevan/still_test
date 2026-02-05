import React from 'react'
import { useState } from 'react'

function MyCertifications() {
  const [certs, setCerts] = useState([
  {
    id: "cert-001",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issuedAt: "2023-06-15",
    expiresAt: "2026-06-15",
  },
  {
    id: "cert-002",
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    issuedAt: "2022-11-01",
    expiresAt: "2025-11-01",
  },
  {
    id: "cert-003",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issuedAt: "2021-09-20",
    expiresAt: "2024-09-20",
  },
  {
    id: "cert-004",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    issuedAt: "2024-01-10",
    expiresAt: "2027-01-10",
  },
  {
    id: "cert-005",
    title: "React Developer Certification",
    issuer: "Meta",
    issuedAt: "2023-03-05",
    expiresAt: "2025-03-05",
  },
]
)

  return (
    <div className='bg-white m-4 rounded-lg p-4 shadow-sm grid grid-rows-[auto-1fr]'>
      <h1 className='m-2 text-gray-700 font-semibold'> My Certifications</h1>
      <div className='border-gray-700 flex flex-col scrollbar-nice overflow-y-scroll max-h-30'>
       {
        certs.map(cert=>(
          <div className= "flex flex-1 justify-between text-gray-700 shadow-sm p-1 border-0 border-gray-700">
            <h4>{cert.title}</h4>
            <h4 className='bg-yellow-400 drop-shadow-sm rounded-lg'>{cert.expiresAt}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCertifications
