import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/patient';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from '../../material/material.module';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-patient',
  imports: [MaterialModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{

  // patients: Patient[] = [];
  dataSource: MatTableDataSource<Patient>;
  //displayedColumns: string[] = ['idPatient', 'firstName', 'lastName', 'dni', 'actions'];
  columnDefinitions = [
    {def: 'idPatient', label: 'idPatient', hide: true},
    {def: 'firstName', label: 'firstName', hide: false},
    {def: 'lastName', label: 'lastName', hide: false},
    {def: 'dni', label: 'dni', hide: false},
    {def: 'actions', label: 'actions', hide: false}
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private patientService: PatientService){}

  ngOnInit(): void {
    this.patientService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  getDisplayedColumns(){
    return this.columnDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }

  applyFilter(e: any){
    this.dataSource.filter = e.target.value.trim();
  }

}
