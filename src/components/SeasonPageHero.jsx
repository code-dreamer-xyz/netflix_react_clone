import React from "react";

import work_bg from "../assets/images/work-bg.jpg";
import { Link } from "react-router-dom";

export default function SeasonPageHero({ serie, season, btns }) {
  return (
    <div className="movie-details-page">
      <div className="movie-page-hero">
        <div className="movie-backdrop">
          <img
            className="movie-backdrop-img"
            src={
              serie?.backdrop_path
                ? `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${serie?.backdrop_path}`
                : work_bg
            }
            alt="backdrop-img"
          />
        </div>
        <div className="fluid-overlay"></div>
        <div className="movie-hero-content">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="offset-1 d-none d-lg-block col-3">
                <div className="movie-poster">
                  <img
                    src={
                      serie?.poster_path
                        ? `https://www.themoviedb.org/t/p/w440_and_h660_face${season?.poster_path}`
                        : `https://via.placeholder.com/440X660/FF2530/fff.png?text=NOT_AVAILABLE`
                    }
                    alt="movie-poster"
                    className="movie-poster-img"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="movie-information">
                  <h1 className="movie-title">
                    {serie?.name}{" "}
                    <span
                      className="movie-release-date
                        "
                    >
                      {`(${season?.name})`}
                    </span>
                  </h1>
                  <div className="work-info d-flex">
                    <span className="work-info-tag">{season?.air_date}</span>
                    <span className="work-info-tag age-class">{`${
                      season?.episode_count
                    } ${
                      season?.episode_count === 1 ? "episode" : "episodes"
                    }`}</span>
                    {serie?.genres?.map((el) => {
                      return (
                        <span key={el.id} className="work-info-tag">
                          {el.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="user-actions py-2"></div>
                  <div className="work-description  py-3">
                    {season?.overview || serie?.overview}
                  </div>
                  <div className="work-actions-btns">
                    <Link
                      to={`/watch/serie/${serie?.id}/season/${season.season_number}/episode/1`}
                      className="btn me-3"
                    >
                      <i className="fal fa-play me-3"></i>
                      play
                    </Link>
                    {serie?.homepage ? (
                      <a
                        href={serie?.homepage}
                        target="_blank"
                        className="btn me-3 info-link-btn"
                      >
                        Visit Website
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
