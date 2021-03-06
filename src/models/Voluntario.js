

const mongoose = require("mongoose");
const mogoPaginate = require("mongoose-paginate");

//documento do banco
const VoluntarioSchema = new mongoose.Schema({
       
            nome: {
                type: String,
                
            },
            dataNascimento:{
                type: Date,
                
            },
            sexo:{
                type: String,
                
            },
            raca:{
                type: String,
                
            },
            rg:{
                type: Number,
 
            },
            ssp:{   
                type: String
            },
            dataExpedicao:{
                type: Date,
            },
            cpf:{
                type:Number,

            },
            titulo:{
                type: Number
            },
            secao:{
                type: Number
            },
            zona:{
                type: String
            },
            resevista:{
                type: String
            },
            
            naturalidade:{
                type: String,
                
            },
            estado:{
                type: String,
                
            },
            pai:{
                type: String,
               
            },
            mae:{
                type: String,
               
            },
            estadoCivil:{
                type: String,
               
            },           
             grauInstrucao:{
                type: String,
                
            },
            cursoHabilitacao:{
                type: String,
                
            },
            funcao:{
                type: String,
                
            },
            rua:{
                type: String,
               
            },
            numero:{
                type: String,
               
            },
            bairro:{
                type: String,
               
            },
            celular:{
                type: String,
               
            },
            email:{
                type: String,
               
            }

});
//paginando lista
VoluntarioSchema.plugin(mogoPaginate);

mongoose.model("Voluntario", VoluntarioSchema);

