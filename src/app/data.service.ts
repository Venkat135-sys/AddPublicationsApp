import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  publications = [
    {
      name:"Gunupudi Rajesh Kumar",
      dept:"IT",
      title:"Similarity function for intrusion detection",
      type:"Conference",
      details:"2017 International Conference on Engineering & MIS (ICEMIS),  Monastir, Tunisia, Publisher IEEE",
      year:"2019",
      url:"https://ieeexplore.ieee.org/abstract/document/8273116"
    },
    {
      name:"Narsimha Gugulothu",
      dept:"CSE",
      title:"Strategic Application of Software Process Model to Optimize Business Intelligence Results",
      type:"Conference",
      details:"Pages 1-6",
      year:"2015",
      url:"https://ieeexplore.ieee.org/abstract/document/8273116"
    },

    {
      name:"Mangathayaru Nimmala",
      dept:"IT",
      title:"Strategic Application of Software Process Model to Optimize Business Intelligence Results",
      type:"Conference",
      details:"Pages 1-6",
      year:"2015",
      url:"https://ieeexplore.ieee.org/abstract/document/8273116"
    },
    {
      name:"Gunupudi Rajesh Kumar",
      dept:"IT",
      title:"A novel similarity measure for intrusion detection using gaussian function",
      type:"Journal",
      details:"Volume. 39, No. 2, pages 173-183",
      year:"2016",
      url:"https://arxiv.org/ftp/arxiv/papers/1604/1604.07510.pdf"

    },
    {
      name:"Mangathayaru Nimmala",
      dept:"IT",
      title:"Optimising business intelligence results through strategic application of software process model",
      type:"Journal",
      details:" ICEMIS 2017 2018-January (2018), 1–6",
      year:"2017",
      url:"https://www.inderscienceonline.com/doi/abs/10.1504/IJIE.2017.087013"
    },
    {
      name:"Narsimha Gugulothu",
      dept:"CSE",
      title:"Optimising business intelligence results through strategic application of software process model",
      type:"Journal",
      details:" ICEMIS 2017 2018-January (2018), 1–6",
      year:"2017",
      url:"https://www.inderscienceonline.com/doi/abs/10.1504/IJIE.2017.087013"
    },
    {
      name:"Gunupudi Rajesh Kumar",
      dept:"IT",
      title:"Feature clustering for anomaly detection using improved fuzzy membership function",
      type:"Conference",
      details:"Article No.: 35, Pages 1–9, Publisher: Association for Computing Machinery, New York, United States",
      year:"2018",
      url:"https://dl.acm.org/doi/abs/10.1145/3234698.3234733"
    }

  ]

}
