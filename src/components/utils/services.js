import carRepair from '../../asset/image/car-repair.jpg';
import engineBelt from '../../asset/image/engine-belt.jpg';
import engineDiagnosis from '../../asset/image/engine-diagnosis.jpg';
import sparePart from '../../asset/image/spare-part.jpg';
import wheel from '../../asset/image/wheel.jpg';
import jumpstart from '../../asset/image/jumpstart.jpg';
import {
  faScrewdriverWrench,
  faLaptop,
  faWheelchair,
  faWrench,
  faCogs,
  faCarBattery,
} from '@fortawesome/free-solid-svg-icons';

export const serviceData = [
  {
    title: 'Repair',
    content:
      'Nothing offset a budget faster than a car repair. Getting a component fixed or replaced on any make or model of car sooner can save future damage and disapointment.',
    img: carRepair,
    serviceIcon: faScrewdriverWrench,
  },
  {
    title: 'Engine Belt Replacement ',
    content:
      'If your fan belt or serpentine belt breaks down and frays. This may stop the water pump from circulating coolant through the cooling system, causing the engine to overheat.',
    img: engineBelt,
    serviceIcon: faCogs,
  },
  {
    title: 'Auto Diagnosis',
    content:
      'The main benefit of diagnostic testing is that it can quickly and accurately identify problems so that car repair times and cost are greatly reduced.',
    img: engineDiagnosis,
    serviceIcon: faLaptop,
  },
  {
    title: 'Spare Part',
    content:
      'We provide the most sustainable, durable and high quality Auto Parts for various vehicles and help you save money by offering you the most affordable rates.',
    img: sparePart,
    serviceIcon: faWrench,
  },
  {
    title: 'Tire And Wheel',
    content:
      'Investing in a wheel and tire package is a smart way to save money and time. Our package includes tires, wheels, and all other necessary hardware to install them.',
    img: wheel,
    serviceIcon: faWheelchair,
  },
  {
    title: 'Jump Start',
    content:
      'Sometimes, a modern car is used to jumpstart an older car, this may cause a power surge to the newer car, resulting in damage to the expensive electronic systems.',
    img: jumpstart,
    serviceIcon: faCarBattery,
  },
];
