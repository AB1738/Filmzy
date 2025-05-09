import { z } from "zod";

export const userSchema = z.object({
  userId: z.string(),
  firstName: z.string(),
});

export const commentSchema = z.object({
  text: z.string().min(10, "Comment must be at least 10 characters"),
  author: userSchema,
  authorId: z.string(),
});

export const likedMoviesSchema = z.object({
  user: userSchema,
  userId: z.string(),
  movieId: z.number(),
});
export const watchListedMoviesSchema = z.object({
  user: userSchema,
  userId: z.string(),
  movieId: z.number(),
});
export const movieSchema = z
  .object({
    id: z.number(),
    backdrop_path: z.string(),
    title: z.string(),
    overview: z.string(),
    release_date: z.string(),
    genres: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    ),
    // comments: z.array(commentSchema),
    // likes: z.array(likedMoviesSchema),
    // watchlists: z.array(watchListedMoviesSchema),
  })
  .passthrough();

export type User = z.infer<typeof userSchema>;
export type WatchListedMovie = z.infer<typeof watchListedMoviesSchema>;
export type LikedMovie = z.infer<typeof likedMoviesSchema>;
export type Movie = z.infer<typeof movieSchema>;
export type Comment = z.infer<typeof commentSchema>;
