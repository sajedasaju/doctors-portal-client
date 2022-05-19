import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(true);
    const [adminLoading, setAdminLoading] = useState('false')
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://gentle-anchorage-06325.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)

                })
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin