import { pool} from '../db.js';

export const getAudios = async(req, res) => {
    try {
        const [resultado] =  await pool.query('SELECT * FROM audios');;
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong", error });
    }
}

export const getLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        const [result] = await pool.query("SELECT * FROM usuarios WHERE email= ?", email);

        if( result.length === 0 ){
            return res.status(400).json({ msg: "User does not exist.", result });
        }else{
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
        }
        
        // if(result.length === 0){
        //     return res.status(400).json({ msg: "User does not exist.", result });
        // }else{
        //     bcrypt.compare(password, result[0].password).then((esCorrecto) => {
        //         if(esCorrecto){
        //             const { nombres, email, letra, texto, ruta } = result[0];                    
        //             res.status(200).json({
        //                 msg: "Usuario logeado correctamente",
        //                 usuario: {
        //                     nombres,
        //                     email,
        //                     letra,
        //                     texto,
        //                     ruta                     
        //                 },
        //             });                    
        //         }else{
        //             return res.status(400).json({ msg: "User or password incorrect" });
        //         }
        //     })
        // }
        
    } catch (error) {
        return res.status(500).json({ msg: "Something goes wrong", error });
    }
}