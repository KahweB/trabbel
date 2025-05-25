"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {
    const searchParams = useSearchParams()
    const destination = searchParams.get("destination")
    const activity = searchParams.get("activity")
    const duration = searchParams.get("duration")
    const price = searchParams.get("price")
    return (
        <div>
            <p><strong>Destination:</strong> {destination || "not specified"}</p>
            <p><strong>Destination:</strong> {activity || "not specified"}</p>
            <p><strong>Destination:</strong> {duration || "not specified"}</p>
            <p><strong>Destination:</strong> {price || "not specified"}</p>
        </div>
    )
}

export default Search