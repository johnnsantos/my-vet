import rex from './assets/images/PetCard/rex.png'
import luna from './assets/images/PetCard/luna.png'
import avatar from './assets/images/UserProfile/ciro.png'

export const mockData = {
	userInfo: {
		id: 1515,
		token: 'TOKENEXEMPLOTESTEloORemIPsuummSSOSO23843423**--23nfkd',
		name: 'Ciro Bottini',
		profile: 'Tutor',
		photoName: 'img_ciro.jpg',
		photoUrl: avatar,
		cellphone: '+55 33 33333 3333',
		email: 'ciro@gmail.com',
		born: '23 agosto de 1976'
	},
	userPets: [{
		id: 1,
		photo: rex,
		name: 'Rex',
		specie: 'Ciro Bottini',
		sex: 'Macho castrado',
		breed: 'Affegan hound',
		weight: 13,
		age: 5,
		healthy: false,
		controls: {
			parasites: [
				{
					id: 1,
					name: 'Vermífugo',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'regular',
					time: '30',
					highlight: true,
					hasStartedProtocol: true
				},
				{
					id: 2,
					name: 'Pulgas e carrapatos',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					regularity: 'warning',
					time: '01',
					highlight: false,
					hasStartedProtocol: true
				}
			],
			vaccines: [
				{
					id: 1,
					name: 'Antirrábica ',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'regular',
					time: '180',
					highlight: true,
					hasStartedProtocol: true
				},
				{
					id: 2,
					name: 'Leishmaniose',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					regularity: 'warning',
					time: '02',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 3,
					name: 'Múltipla ou Polivalente (V8/V10)',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					regularity: 'warning',
					time: '02',
					highlight: false,
					hasStartedProtocol: false
				},
				{
					id: 4,
					name: 'Tosse dos Canis',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'success',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 5,
					name: 'Giárdia',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'success',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 6,
					name: 'Dirofilariose',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'success',
					time: '180',
					highlight: false,
					hasStartedProtocol: false
				}
			]
		}
	},
	{
		id: 2,
		photo: luna,
		name: 'Luna',
		specie: 'Ciro Bottini',
		sex: 'Fêmea castrado',
		breed: 'SRD Sem raça definida',
		weight: '07',
		age: 6.7,
		healthy: true,
		controls: {
			parasites: [
				{
					id: 1,
					name: 'Vermífugo',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'regular',
					time: '30',
					highlight: true,
					hasStartedProtocol: true
				},
				{
					id: 2,
					name: 'Pulgas e carrapatos',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					regularity: 'warning',
					time: '01',
					highlight: false,
					hasStartedProtocol: true
				}
			],
			vaccines: [
				{
					id: 1,
					name: 'Antirrábica ',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'regular',
					time: '180',
					highlight: true,
					hasStartedProtocol: true
				},
				{
					id: 2,
					name: 'Leishmaniose',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					regularity: 'warning',
					time: '02',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 3,
					name: 'Múltipla ou Polivalente (V8/V10)',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					regularity: 'warning',
					time: '02',
					highlight: false,
					hasStartedProtocol: false
				},
				{
					id: 4,
					name: 'Tosse dos Canis',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'success',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 5,
					name: 'Giárdia',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'success',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 6,
					name: 'Dirofilariose',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					regularity: 'success',
					time: '180',
					highlight: false,
					hasStartedProtocol: false
				}
			]
		}
	}
	]
}