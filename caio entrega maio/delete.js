async function deleteProfessor(id) {
    try {
        const response = await fetch(`${API_URL_}/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Professor excluído com sucesso!");
            // Atualiza a lista após a exclusão
            buttonProfessores.click();
        } else {
            alert("Erro ao excluir o professor.");
        }
    } catch (error) {
        console.error("Erro ao excluir o professor:", error);
    }
}