import Hospital from '../models/hospital.js';


//CRUD operarion goes here
export const getHospitals = async (req, res) => {
	try {
		const hospitals = await Hospital.find({});
		await res.json(hospitals);
	} catch (error) {
		res.status(500).send('Error getting hospitals');
	}
};

export const postHospital = async (req, res) => {
	try {
		const { name, addresse, city, description } = req.body;
		const hospitals = await Hospital.create({
			name,
			addresse,
			city,
			description,
		});
		await res.json(hospitals);
	} catch (error) {
		res.status(500).send('Error posting hospital');
	}
};

export const getHospitalById = async (req, res) => {
	try {
		const { id } = req.params;
		const hospital = await Hospital.findById(id);
		await res.json(hospital);
	} catch (error) {
		res.status(500).send('Error getting hospital');
	}
};
//used regex for quering 
export const getHospitalsByKeyword = async (req, res) => {
	try {
		const { keyword } = req.params;
		const hospitals = await Hospital.find({
			name: { $regex: keyword },
		});

		await res.json(hospitals);
	} catch (error) {
		res.status(500).send('Error getting Hospitals');
	}
};
