import jwt from "jsonwebtoken";
import { createTask, getAllTasks } from "../../../frontend/Js/From";
import { update } from "./auth.controller";

// recuperer les taches
export const fetchTasks = async (req, res)=>{
    try{
       
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

        const  {name, status} = req.body;
        const id = await createTask({name, userID,status: status ?? 0});
        res.status(201).json ({message:"Tache créée", id})
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Erreur serveur (addTask)"})
    }
};

// changer un tache
export const editTask = async (req, res)=>{
    try{
        const {id}= req.params;
        const {name, status} = req.body;
        await updateTask (id,{name, status});
        res.json ({message: "tache modifier"});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Erreur serveur (editTask)"})
    }
};

//supprimer tache
export const removeTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteTask(id);
        if (!deleted) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json({ message: "Tâche supprimée" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur removeTask" });
    }
};