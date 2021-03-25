const db = require('../database/users')



module.exports = {
    getAllHotels: (req, res) => {
        const date = req.query.date
        const end = req.query.end

        db.query(`select h.id, h.name, min(r.price) as price, address, phone, star, hi.url from hotels h join rooms r on h.id = r.hotels_id
        join hotel_images hi on hi.hotels_id = h.id 
        where h.id in (
            select hotels_id from rooms where id in (
                select get_room_id_available(?,?, id, room_counts) from rooms)) GROUP BY h.name;`, [date, end], (err, result) => {
            try {
                if (err) throw err
                res.send({
                    error: false,
                    message: "register success",
                    data: result
                })
            } catch (error) {
                res.send({
                    error: true,
                    message: error.message
                })
            }
        })


    },
    getHotelDetails: (req, res) => {

        const { id } = req.params
        const date = req.query.date
        const end = req.query.end
        db.query('select h.id, h.name,h.star, h.address,h.phone, group_concat(distinct hi.url) as hotel_images, group_concat(distinct f.name) as fac_name, group_concat(distinct f.icon) as icon from hotels h join hotel_images hi  on h.id = hi.hotels_id and hi.hotels_id = ? join hotels_has_facilities hf on h.id = hf.hotels_id and hf.hotels_id = ? join facilities f on hf.facilities_id = f.id join rooms r on f.id = r.hotels_id;', [id, id], (err, result) => {


            try {
                if (err) throw err
                let details = []

                result.forEach(value => {
                    let facility = []
                    let icon = value.icon.split(',')
                    let fac_name = value.fac_name.split(',')
                    icon.forEach((v, i) => {
                        facility.push({ name: fac_name[i], icon: v })
                    })
                    details.push({ id: value.id, name: value.name, address: value.address,star:value.star, phone: value.phone, hotel_images: value.hotel_images.split(','), facility: facility, rooms: [] })
                })




                db.query(`select r.id,r.name,r.guest_count,r.price,get_total_room_count('${date}','${end}',r.id,room_counts) as room_counts,group_concat(distinct ri.url) as room_image from rooms r join room_images ri on r.id = ri.rooms_id and r.hotels_id =? group by r.name`, [id], (err, result) => {
                    try {

                        if (err) throw err
                        result.forEach((value) => {
                            details[0].rooms.push({ id: value.id, name: value.name, guest_count: value.guest_count, price: value.price, room_count: value.room_counts, image: value.room_image.split(',') })
                        })

                        res.send({
                            error: false,
                            hotel_details: details
                        })
                    } catch (error) {
                        res.send({
                            error: true,
                            message: error.message
                        })
                    }


                })
            } catch (error) {
                res.send({
                    error: true,
                    message: error.message
                })
            }


        })
    }
}

