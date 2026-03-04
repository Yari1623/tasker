import db from "../config/db";

export const getAllTasks = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM task")
        return rows;
    } catch (error) {
        console.error("erreur getAllTasks" , error.message);
        throw error;
    }
}

export const createTask = async ({ name }) => {
    try {
        await db.query("INSERT INTO task (name) VALUES (?)",
            [name]
        )
    } catch (error) {
        console.error("erreur createTask", error.message);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        const [result] = await db.query("DELETE FROM task WHERE mail = ?",
            [id]
        )
        return result.affectedRows > 0;
    } catch (error) {
    console.error("erreur deleteTask", error.message);
    throw error;
}
}

export const updateTask = async (id, name) => {
    try {
        await db.query("UPDATE task SET name = ? WHERE id = ?",
            [name, id]
        )
    } catch (error) {
        console.error("erreur updateTask", error.message);
        throw error;
    }
}