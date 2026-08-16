//your JS code here. If required.
import {readfile} from "node:fs/promises";

const getStudentAverages = async () =>
	{
		try {
			const data = await readfile("students.json", "utf8");
			const students = JSON.parse(data);
			const studentsWithAverrages = students.map((student) =>
				{
					const total = student.grades.reduce((sum, grade) => sum + grade, 0);
					const average = total / student.grades.length;

					return {
						name: student.name,
						average: average.toFixed(2);
					};
				});
			    console.log(studentsWithAverrages)
		} catch (error) {
			console.log(error);
		}
	}
