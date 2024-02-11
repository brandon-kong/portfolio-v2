import axios from "axios";

import type { Project } from "@/types";

const getProject = async (slug: string): Promise<Project | undefined> => {
    return new Promise(async (resolve, reject) => {
        axios.get<Project>(`${process.env.SITE_URL}/api/projects/${slug}`)
        .then((response) => {
            resolve(response.data)
            return response
        })
        .catch((error) => {
            if (error.response && error.response.status === 404) {
              resolve(undefined);
            } else {
              reject(error);
            }
            return error;
          })
        .finally(() => {
            // Do nothing
        }
        )
    })
}

const getAllProjects = async (): Promise<Project[] | undefined> => {
    return new Promise(async (resolve, reject) => {
        axios.get<Project[]>(`http://localhost:3000/api/projects`)
        .then((response) => {
            resolve(response.data)
            return response
        })
        .catch((error) => {
            if (error.response && error.response.status === 404) {
              resolve(undefined);
            } else {
              reject(error);
            }
            return error;
          })
        .finally(() => {
            // Do nothing
        }
        )
    })
}

export { getProject, getAllProjects }