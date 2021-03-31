import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

//Ver el video 58 para entender mas cuando es una tabla relacional y yo quiero el objeto completo de la otra tabla
const type : IResolvers = {
    Estudiante: {
        courses: parent => {

            const cursosLista : Array<any> = [];

            parent.courses.map((curso: String) => {
                cursosLista.push(_.filter(database.cursos, ['id', curso]) [0])
            });

            return cursosLista;
        }
    },
    Curso: {
        students: parent => {

            const listEstudiantes: Array<any> = [];
            const idCurso = parent.id;

            database.estudiantes.map((estudiante: any) => {

                if(estudiante.courses.filter((id:any) => id === idCurso) > 0) {
                    listEstudiantes.push(estudiante)
                }
            });

            return listEstudiantes;
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
};

export default type;