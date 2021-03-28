import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query : IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, { id }): any {
            //Aqui comparamos que el id que introducimos como parametro es igual al de la bbdd
            const resultado =  database.estudiantes.filter(estudiante => estudiante.id === id)[0];

            if(resultado === undefined) {
                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el id ${id}`,
                    email: '',
                    courses: []
                }
            }

            return resultado;
        },

    }
};

export default query;