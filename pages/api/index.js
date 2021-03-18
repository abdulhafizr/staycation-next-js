// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ 
    message: 'Success get all data',
    data: {
      travelers: 80409,
      treasure: 862,
      cities: 1492,
      mostPicked: [
        {
          name: 'Blue Origin Fams',
          location: 'Jakarta, Indonesia',
          price: 50,
          photo: 'mp_1.png'
        },
        {
          name: 'Ocean Land',
          location: 'Bandung, Indonesia',
          price: 22,
          photo: 'mp_2.png'
        },
        {
          name: 'Stark House',
          location: 'Malang, Indonesia',
          price: 856,
          photo: 'mp_3.png'
        },
        {
          name: 'Vinna Vill',
          location: 'Malang, Indonesia',
          price: 62,
          photo: 'mp_4.png'
        },
        {
          name: 'Bobox',
          location: 'Medan, Indonesia',
          price: 72,
          photo: 'mp_5.png'
        },
      ],
      houses: [
        {
          name: 'Tabby Town',
          location: 'Gunung Batu, Indonesia',
          photo: 'house_1.png',
          popularChoice: true,
        },
        {
          name: 'Anggana',
          location: 'Bogor, Indonesia',
          photo: 'house_2.png'
        },
        {
          name: 'Seattle Rain',
          location: 'Jakarta, Indonesia',
          photo: 'house_3.png'
        },
        {
          name: 'Wodden Pit',
          location: 'Wonosobo, Indonesia',
          photo: 'house_4.png'
        }
      ],
      hotels: [
        {
          name: 'Green Park',
          location: 'Tangerang, Indonesia',
          photo: 'hotel_1.png'
        },
        {
          name: 'Podo Wae',
          location: 'Madiun, Indonesia',
          photo: 'hotel_2.png'
        },
        {
          name: 'Silver Rain',
          location: 'Bandung, Indonesia',
          photo: 'hotel_3.png'
        },
        {
          name: 'Cashville',
          location: 'Kemang, Indonesia',
          photo: 'hotel_4.png',
          popularChoice: true,
        }
      ],
      apartments: [
        {
          name: 'PS Wood',
          location: 'Depok, Indonesia',
          photo: 'apartment_1.png'
        },
        {
          name: 'One Five',
          location: 'Jakarta, Indonesia',
          photo: 'apartment_2.png'
        },
        {
          name: 'Minimal',
          location: 'Bogor, Indonesia',
          photo: 'apartment_3.png',
          popularChoice: true,

        },
        {
          name: 'Stays Home',
          location: 'Wonosobo, Indonesia',
          photo: 'apartment_4.png'
        }
      ],
      testimonial: {
        name: 'Angga',
        job: 'Product Designer',
        photo: 'testi_1.png',
        testimonial: 'What a great trip with my family and I should try again next time soon ...',
        rate: 5
      }
    }  
  })
}
