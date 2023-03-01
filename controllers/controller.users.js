const bcrypt = require("bcrypt");
import { getConnection} from '../database/database';

const getLogin = async(req, res) => {
    try {
        const {email, password} = req.body;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios WHERE email= ?", email);

        // console.log(result);

        if(result[0] == null){
            return res.status(400).json({ msg: "User does not exist.", result });
        }else{
            bcrypt.compare(password, result[0].password).then((esCorrecto) => {
                if(esCorrecto){
                    const { nombres, email, letra, texto, ruta } = result[0];
                    res.status(200).json({
                        msg: "Usuario logeado correctamente",
                        usuario: {
                            nombres,
                            email,
                            letra,
                            texto,
                            ruta                     
                        },
                    });                    
                }else{
                    return res.status(400).json({ msg: "User or password incorrect" });
                }
            })
        }       
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}


const obtenerAudios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM audios");
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const methods = {
    getLogin,
    obtenerAudios
}