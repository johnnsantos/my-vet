// import rex from './assets/images/PetCard/rex.png'
// import luna from './assets/images/PetCard/luna.png'
import avatar from './assets/images/UserProfile/ciro.png'

export const mockData = {
	userInfo: {
		id: 1515,
		token: 'TOKENEXEMPLOTESTEloORemIPsuummSSOSO23843423**--23nfkd',
		username: 'cirobottini',
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
		photo: null,
		name: 'Nina',
		specie: 'dog',
		sex: 'Fêmea castrada',
		breed: 'SRD sem raça definida',
		weight: 14.6,
		age: 4,
		healthy: false,
		owner: "Ciro Bottini",
		controls: {
			parasites: [
				{
					id: 1,
					name: 'Vermífugo',
					lastDose: 'Helfine Plus Cães - 26 jun 2021',
					progress: 100,
					severity: 'critical',
					regularity: 'regular',
					time: '00',
					highlight: true,
					hasStartedProtocol: true
				},
				{
					id: 2,
					name: 'Pulgas e carrapatos',
					lastDose: 'Seresto - 8 mar 2021',
					progress: 70,
					severity: 'warning',
					regularity: 'regular',
					time: '35',
					highlight: false,
					hasStartedProtocol: true
				}
			],
			vaccines: [
				{
					id: 1,
					name: 'Antirrábica ',
					lastDose: 'Nobivac Raiva - 14 abr 2021',
					progress: 60,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: true,
					hasStartedProtocol: true
				},
				{
					id: 2,
					name: 'Leishmaniose',
					lastDose: 'LeishTec - 02  jun  2021',
					progress: 30,
					severity: 'success',
					regularity: 'regular',
					time: '216',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 3,
					name: 'Múltipla ou Polivalente (V8/V10)',
					lastDose: 'Nobivac DHPPi+L - 14  abr  2021',
					progress: 30,
					severity: 'success',
					regularity: 'regular',
					time: '216',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 4,
					name: 'Tosse dos Canis',
					lastDose: 'Nobivac KC - 02 jun 2021',
					progress: 60,
					severity: 'success',
					regularity: 'regular',
					time: '183',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 5,
					name: 'Giárdia',
					lastDose: undefined,
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: false
				},
				{
					id: 6,
					name: 'Puppy',
					lastDose: 'Nobivac Puppy DP - 07 fev 2018',
					progress: 70,
					severity: 'success',
					regularity: 'once',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				}
			]
		}
	},
	{
		id: 2,
		photo: null,
		name: 'Luna',
		specie: 'cat',
		sex: 'Fêmea castrado',
		breed: 'SRD Sem raça definida',
		weight: '07',
		age: 6.7,
		healthy: true,
		owner: "Ciro Bottini",
		controls: {
			parasites: [
				{
					id: 1,
					name: 'Vermífugo',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'regular',
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
					severity: 'warning',
					regularity: 'regular',
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
					severity: 'regular',
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
					severity: 'warning',
					regularity: 'regular',
					time: '02',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 3,
					name: 'Múltipla ou Polivalente (V8/V10)',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					severity: 'warning',
					regularity: 'regular',
					time: '02',
					highlight: false,
					hasStartedProtocol: false
				},
				{
					id: 4,
					name: 'Tosse dos Canis',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 5,
					name: 'Giárdia',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 6,
					name: 'Dirofilariose',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: false
				}
			]
		}
	},
	{
		id: 3,
		photo: null,
		name: 'Steve',
		specie: 'dog',
		sex: 'Macho castrado',
		breed: 'Afghan hound',
		weight: 13,
		age: 7,
		healthy: false,
		owner: "Ciro Bottini",
		controls: {
			parasites: [
				{
					id: 1,
					name: 'Vermífugo',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'regular',
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
					severity: 'warning',
					regularity: 'regular',
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
					severity: 'regular',
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
					severity: 'warning',
					regularity: 'regular',
					time: '02',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 3,
					name: 'Múltipla ou Polivalente (V8/V10)',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 30,
					severity: 'warning',
					regularity: 'regular',
					time: '02',
					highlight: false,
					hasStartedProtocol: false
				},
				{
					id: 4,
					name: 'Tosse dos Canis',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 5,
					name: 'Giárdia',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: true
				},
				{
					id: 6,
					name: 'Dirofilariose',
					lastDose: 'Nome do produto - 4 out 2021',
					progress: 70,
					severity: 'success',
					regularity: 'regular',
					time: '180',
					highlight: false,
					hasStartedProtocol: false
				}
			]
		}
	}
	]
}