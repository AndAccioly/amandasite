
import { ArtigoTO } from "../model/ArtigoTO"

export function buscarArtigoService() {
    var items = []
    items.push(new ArtigoTO(1, "Título 1", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "18/04/2022"))
    items.push(new ArtigoTO(2, "Título 2", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "14/04/2022"))
    items.push(new ArtigoTO(3, "Título 3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "13/04/2022"))
    items.push(new ArtigoTO(4, "Título 4", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "10/04/2022"))
    items.push(new ArtigoTO(5, "Título 5", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "09/04/2022"))
    items.push(new ArtigoTO(6, "Título 6", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "08/04/2022"))
    items.push(new ArtigoTO(7, "Título 7", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.", "15/03/2022"))


    return items
}