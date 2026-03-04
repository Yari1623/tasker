import jwt from "jsonwebtoken";
import { createTask, getAllTasks } from "../../../frontend/Js/From";

// recuperer les taches
export const fetchTasks = async (req, res)=>{
    try{
        const userID = getUserID(req);
        const task =  await getAllTasks(userID);
        res.json(task);
    } catch(error) {
        console.error(error);
        res.status(500).json ({message: "Erreur serveur (fetchTask)"});
    }
};


//creer une tache
export const addTask = async (req, res)=> {
    try{
        const userID = getUserID(req);
        const  {name, status} = req.body;
        const id = await createTask({name, userID,status: status ?? 0});
        res.status(201).json ({message:"Tache créée", id})
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Erreur serveur (addTask)"})
    }
}