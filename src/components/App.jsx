import { useEffect, useRef, useState } from "react";
import axios from "axios";
import css from "./App.module.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { NoResults } from "./NoResult/NoResults";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setNoResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [largeURL, setLargeURL] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryString = form.elements.search.value;
    if (queryString !== searchQuery) {
      setImages([]);
      setCurrentPage(1);
      setSearchQuery(queryString);
    }
  }

  const fetchImages = async (searchQuery, currentPage) => {
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const key = "6950737-29a0d5130824bfea54194711c";
    setIsLoading(true);
    const url = `?q=${searchQuery}&page=${currentPage}&key=${key}&safesearch=true&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
    return response;
  }

  const addImages = async () => {
    try {
      const { data } = await fetchImages(searchQuery, currentPage);
      const noResults = data.totalHits === 0;
      setImages((prev) => [...prev, ...data.hits]);
      setTotalPages(Math.ceil(data.totalHits / 12));
      setNoResults(noResults);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  }

  const openModal = (e) => {
    const img = e.currentTarget;
    const large = img.getAttribute("data-large");
    const alt = img.alt;
    setLargeURL(large);
    setModalAlt(alt);
    setModalIsOpen(true);
    window.addEventListener("keydown", handleKey);
  }

  const closeModal = () => {
    setLargeURL("");
    setModalAlt("");
    setModalIsOpen(false);
    window.removeEventListener("keydown", handleKey);
  }

  const handleKey = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    if (searchQuery) {
      addImages();
    }
  }, [searchQuery, currentPage]);
  

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handelSubmit} />
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} onClick={openModal} />}
      {noResults && <NoResults />}
      {totalPages > 0 && currentPage < totalPages && <Button label="load more" onClick={handleLoadMore} />}
      {modalIsOpen && <Modal src={largeURL} alt={modalAlt} onClick={closeModal} />}
    </div>
  );
};
